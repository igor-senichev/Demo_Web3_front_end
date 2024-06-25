import React, { useState, useEffect } from "react"
import axios from "axios"
import styles from "./TonTranslation.module.scss"
import { Jetton } from "../../components/Jetton"
import { Button, FlexBoxCol, FlexBoxRow } from "../../components/styled/styled"
import { CHAIN, TonConnectButton, useTonWallet } from "@tonconnect/ui-react"
import { useTonConnect } from "../../hooks/useTonConnect"
import "@twa-dev/sdk"
import { useTonClient } from "../../hooks/useTonClient"
import { Address, fromNano } from "ton"
import { useNavigate } from "react-router-dom"

const TonTranslation: React.FC = () => {
  const { network } = useTonConnect()
  const wallet = useTonWallet()
  const [userWalletAddress, setUserWalletAddress] = useState<string>("")
  const [userId, setUserId] = useState<string | null>(null)
  const [balance, setBalance] = useState<number | null>(null)
  const { client } = useTonClient()
  const navigate = useNavigate()

  useEffect(() => {
    const sendWalletAddressToBackend = async (address: string) => {
      try {
        const response = await axios.post("http://localhost:8092/api/account", {
          cryptoId: address,
        })
        if (response.data && response.data.cryptoId) {
          console.log("ID пользователя:", response.data.cryptoId)
          setUserId(response.data.cryptoId)
        } else {
          console.log("ID пользователя не получен.")
          setUserId(null)
        }
      } catch (error) {
        console.error("Ошибка при отправке адреса кошелька:", error)
        setUserId(null)
      }
    }

    if (wallet?.account?.address) {
      const address = wallet.account.address
      setUserWalletAddress(address)
      console.log("Адрес кошелька пользователя в HEX:", address)
      sendWalletAddressToBackend(address)
    }
  }, [wallet?.account?.address])

  useEffect(() => {
    const fetchBalance = async () => {
      if (!client || !userWalletAddress) return

      try {
        const address = Address.parse(userWalletAddress)
        const balance = await client.getBalance(address)
        setBalance(Number(fromNano(balance)))
      } catch (error) {
        console.error("Ошибка при получении баланса:", error)
        setBalance(null)
      }
    }

    fetchBalance()
    const intervalId = setInterval(fetchBalance, 10000) // Обновляю баланс каждые 10 секунд
    return () => clearInterval(intervalId) // Очищаю интервал при размонтировании компонента
  }, [client, userWalletAddress])

  return (
    <div className={styles.styledApp}>
      <div className={styles.appContainer}>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          <Jetton balance={balance} onNavigate={navigate} />
        </FlexBoxCol>
      </div>
    </div>
  )
}

export default TonTranslation
