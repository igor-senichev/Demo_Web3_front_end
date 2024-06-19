import { useEffect, useState, useCallback } from "react"
import { Address, fromNano, OpenedContract, toNano } from "ton-core"
import { SampleJettonMaster } from "../../build/SampleJettonMaster/tact_SampleJettonMaster"
import { UserWallet } from "../../build/UserWallet/tact_UserWallet"
import { useAsyncInitialize } from "./useAsyncInitialize"
import { useTonClient } from "./useTonClient"
import { useTonConnect } from "./useTonConnect"

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

export function useJettonContract() {
  const { client } = useTonClient()
  const { wallet, sender } = useTonConnect()
  const [balance, setBalance] = useState<string | null>(null)
  const [transferredAmount, setTransferredAmount] = useState<number>(0)
  const [masterWalletAddress, setMasterWalletAddress] = useState<string | null>(
    null
  )

  const jettonContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return null
    const masterAddress = "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9"
    const contract = SampleJettonMaster.fromAddress(
      Address.parse(masterAddress)
    )
    setMasterWalletAddress(masterAddress)
    return client.open(contract) as OpenedContract<SampleJettonMaster>
  }, [client, wallet])

  const jettonWalletContract = useAsyncInitialize(async () => {
    if (!jettonContract || !client || !wallet) return null

    try {
      const jettonWalletAddress = await jettonContract.getGetBalance()
      return client.open(
        UserWallet.fromAddress(jettonWalletAddress)
      ) as OpenedContract<UserWallet>
    } catch (error) {
      console.error("Ошибка при получении адреса Jetton Wallet:", error)
      return null
    }
  }, [jettonContract, client, wallet])

  const fetchBalance = useCallback(async () => {
    if (!jettonWalletContract) return
    setBalance(null)
    try {
      const walletData = await jettonWalletContract.getGetBalance()
      setBalance(fromNano(walletData))
    } catch (error) {
      console.error("Ошибка при получении данных кошелька Jetton:", error)
      setBalance(null)
    }
  }, [jettonWalletContract])

  useEffect(() => {
    async function getBalance() {
      fetchBalance()
      await sleep(5000)
      getBalance()
    }

    getBalance()
  }, [fetchBalance])

  const transferToncoin = async (amount: number) => {
    if (!client || !wallet) return false

    const amountNano = toNano(amount.toString())
    const message = {
      to: Address.parse(masterWalletAddress!),
      value: amountNano,
      bounce: false,
      body: null,
    }

    try {
      await sender.send(message)
      console.log("Перевод выполнен успешно")
      setTransferredAmount((prev) => prev + amount)
      return true
    } catch (error) {
      console.error("Ошибка при переводе Toncoin:", error)
      return false
    }
  }

  const transferFromMasterWallet = async (amount: number, to: string) => {
    if (!jettonContract || !wallet) return false

    const amountNano = toNano(amount.toString())
    const message = {
      $$type: "TransferToUser",
      amount: amountNano,
      userAddress: Address.parse(to),
    }

    try {
      await jettonContract.send(sender, { value: toNano("0.05") }, message)
      console.log("Перевод с мастер-кошелька выполнен успешно")
      setTransferredAmount((prev) => prev + amount)
      return true
    } catch (error) {
      console.error("Ошибка при переводе с мастер-кошелька:", error)
      return false
    }
  }

  return {
    masterWalletAddress,
    jettonWalletAddress: jettonWalletContract?.address.toString(),
    balance: balance,
    transferredAmount,
    transferToncoin,
    transferFromMasterWallet,
    fetchBalance,
  }
}
