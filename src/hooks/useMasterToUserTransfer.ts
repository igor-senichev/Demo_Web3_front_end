import { useEffect, useState, useCallback } from "react"
import { Address, fromNano, toNano } from "ton-core"
import { useTonClient } from "./useTonClient"
import { useTonConnectUI } from "@tonconnect/ui-react"

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time))

export function useMasterToUserTransfer() {
  const { client } = useTonClient()
  const [tonConnectUI] = useTonConnectUI()
  const [balance, setBalance] = useState<string | null>(null)
  const [transferredAmount, setTransferredAmount] = useState<number>(0)
  const masterWalletAddress = "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9"
  const userWalletAddress = "EQCwyY1m4617e5_aF1gduogkq288XGL7YhK5KRzUqlVM3t4M"

  const fetchBalance = useCallback(async () => {
    if (!client) return
    setBalance(null)
    try {
      const address = Address.parse(masterWalletAddress)
      const balance = await client.getBalance(address)
      setBalance(fromNano(balance))
    } catch (error) {
      console.error("Ошибка при получении баланса мастер кошелька:", error)
      setBalance(null)
    }
  }, [client])

  useEffect(() => {
    async function getBalance() {
      fetchBalance()
      await sleep(5000)
      getBalance()
    }

    getBalance()
  }, [fetchBalance])

  const transferFromMasterToUser = async (amount: number) => {
    const amountNano = toNano(amount.toString())

    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
        {
          address: userWalletAddress,
          amount: amountNano.toString(),
        },
      ],
    }

    try {
      await tonConnectUI.sendTransaction(transaction)
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
    balance,
    transferredAmount,
    transferFromMasterToUser,
    fetchBalance,
  }
}
