import { useEffect, useState, useCallback } from "react"
import { Address, fromNano, OpenedContract, toNano } from "ton-core"
import { SampleJetton } from "../../build/SampleJetton/tact_SampleJetton"
import { JettonDefaultWallet } from "../../build/SampleJetton/tact_JettonDefaultWallet"
import { useAsyncInitialize } from "./useAsyncInitialize"
import { useTonClient } from "./useTonClient"
import { useTonConnect } from "./useTonConnect"

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

export function useMasterToUserTransfer() {
  const { client } = useTonClient()
  const { wallet, sender } = useTonConnect()
  const [balance, setBalance] = useState<string | null>(null)
  const [transferredAmount, setTransferredAmount] = useState<number>(0)
  const masterWalletAddress = "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9"

  const jettonContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return null
    const contract = SampleJetton.fromAddress(
      Address.parse(masterWalletAddress)
    )
    return client.open(contract) as OpenedContract<SampleJetton>
  }, [client, wallet])

  const jettonWalletContract = useAsyncInitialize(async () => {
    if (!jettonContract || !client || !wallet) return null

    try {
      const jettonWalletAddress = await jettonContract.getGetWalletAddress(
        Address.parse(wallet)
      )
      return client.open(JettonDefaultWallet.fromAddress(jettonWalletAddress))
    } catch (error) {
      console.error("Ошибка при получении адреса Jetton Wallet:", error)
      return null
    }
  }, [jettonContract, client, wallet])

  const fetchBalance = useCallback(async () => {
    if (!jettonWalletContract) return
    setBalance(null)
    try {
      const walletData = await jettonWalletContract.getGetWalletData()
      setBalance(fromNano(walletData.balance))
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

  const transferFromMasterToUser = async (amount: number) => {
    if (!client || !wallet) return false

    const amountNano = toNano(amount.toString())

    try {
      await sender.send({
        to: Address.parse(wallet),
        value: amountNano,
        bounce: false,
        body: null,
      })
      console.log("Перевод выполнен успешно")
      setTransferredAmount((prev) => prev + amount)
      await fetchBalance() // Обновляем баланс после перевода
      return true
    } catch (error) {
      console.error("Ошибка при переводе Toncoin:", error)
      return false
    }
  }

  return {
    masterWalletAddress,
    jettonWalletAddress: jettonWalletContract?.address.toString(),
    balance: balance,
    transferredAmount,
    transferFromMasterToUser, // Добавляем функцию transferFromMasterToUser
    fetchBalance,
  }
}
