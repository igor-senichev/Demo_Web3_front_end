import React, { useState } from "react"
import { Address } from "ton-core"
import { useJettonContract } from "../hooks/useJettonContract"
import { useTonConnect } from "../hooks/useTonConnect"
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
  Input,
} from "./styled/styled"

interface JettonProps {
  balance: number | null
}

export function Jetton({ balance }: JettonProps) {
  const { connected, wallet } = useTonConnect()
  const {
    jettonWalletAddress,
    balance: jettonBalance,
    transferToncoin,
    transferredAmount,
    fetchBalance,
  } = useJettonContract()
  const [transferAmount, setTransferAmount] = useState("")
  const { masterWalletAddress } = useJettonContract()

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    if (/^\d*[\.,]?\d*$/.test(value)) {
      setTransferAmount(value.replace(",", "."))
    }
  }

  const handleTransferClick = async () => {
    const amount = parseFloat(transferAmount)
    if (!isNaN(amount) && amount > 0) {
      const success = await transferToncoin(amount)
      if (success) {
        console.log(`Переведено ${amount} TON на Мастер кошелек`)
        // Обновляю баланс через определенные интервалы времени
        const intervals = [10000, 15000, 20000, 25000, 30000]
        intervals.forEach((interval) => {
          setTimeout(fetchBalance, interval)
        })
      } else {
        console.log("Операция была отменена или не прошла")
      }
      setTransferAmount("") // Очистка поля ввода после попытки отправки
    } else {
      console.log("Неверная сумма для перевода")
    }
  }

  return (
    <Card title="Toncoin">
      <FlexBoxCol>
        <h3>Toncoin</h3>
        <FlexBoxRow>
          User Wallet:
          <Ellipsis>
            {wallet ? Address.parse(wallet as string).toString() : "Loading..."}
          </Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Master Wallet:
          <Ellipsis>{masterWalletAddress || "Loading..."}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow style={{ marginTop: "20px" }}>
          User wallet balance:
          <div>
            {balance !== null
              ? `${Math.floor(balance * 100) / 100} TON`
              : "Loading..."}
          </div>
        </FlexBoxRow>
        <FlexBoxRow style={{ marginTop: "20px" }}>
          <Input
            type="text"
            value={transferAmount}
            onChange={handleAmountChange}
            placeholder="Enter amount to transfer"
            disabled={!connected}
          />
        </FlexBoxRow>

        <Button
          disabled={
            !connected ||
            transferAmount === "" ||
            isNaN(parseFloat(transferAmount)) ||
            parseFloat(transferAmount) <= 0
          }
          onClick={handleTransferClick}
        >
          Transfer Toncoin
        </Button>
      </FlexBoxCol>
    </Card>
  )
}
