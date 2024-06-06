import React, { useState, useEffect } from "react"
import axios from "axios"
import "./TONLoginWindow.module.scss"
import { Jetton } from "../../components/Jetton"
import styled from "styled-components"
import { Button, FlexBoxCol, FlexBoxRow } from "../../components/styled/styled"
import { CHAIN, TonConnectButton, useTonWallet } from "@tonconnect/ui-react"
import { useTonConnect } from "../../hooks/useTonConnect"
import "@twa-dev/sdk"
import { useTonClient } from "../../hooks/useTonClient"
import { Address, fromNano } from "ton"

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

function TONLoginWindow() {
  const { network } = useTonConnect()
  const wallet = useTonWallet()
  const [userWalletAddress, setUserWalletAddress] = useState<string>("")
  const [userId, setUserId] = useState<string | null>(null)
  const [balance, setBalance] = useState<number | null>(null)
  const { client } = useTonClient()

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
    <StyledApp>
      <AppContainer>
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
          <Jetton balance={balance} />
          {/* {userWalletAddress && (
            <div>Адрес кошелька пользователя в HEX: {userWalletAddress}</div>
          )}
          {userId && <div>ID пользователя: {userId}</div>} */}
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  )
}

export default TONLoginWindow
