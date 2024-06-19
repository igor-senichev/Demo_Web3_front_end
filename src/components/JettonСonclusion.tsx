import { useEffect, useState } from "react"
import { Address } from "ton"
import { useMasterToUserTransfer } from "../hooks/useMasterToUserTransfer"
import { useTonConnect } from "../hooks/useTonConnect"
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
  Input,
} from "./styled/styled"

interface JettonСonclusionProps {
  balance: number | null
  onNavigate: (page: string) => void
  amountTonGame: number // Добавляем пропс для передачи значения amountTonGame
}

export function JettonСonclusion({
  balance,
  onNavigate,
  amountTonGame,
}: JettonСonclusionProps) {
  const { connected, wallet } = useTonConnect()
  const {
    balance: masterBalance,
    transferFromMasterToUser,
    transferredAmount,
    fetchBalance,
    masterWalletAddress,
  } = useMasterToUserTransfer()
  const [transferAmount, setTransferAmount] = useState(amountTonGame.toString())

  useEffect(() => {
    setTransferAmount(amountTonGame.toString())
  }, [amountTonGame])

  const handleTransferClick = async () => {
    const amount = parseFloat(transferAmount)
    if (!isNaN(amount) && amount > 0) {
      const success = await transferFromMasterToUser(amount)
      if (success) {
        console.log(`Переведено ${amount} TON с Мастер кошелька на User Wallet`)
        await fetchBalance()
      } else {
        console.log("Операция была отменена или не прошла")
      }
      setTransferAmount(amountTonGame.toString())
    } else {
      console.log("Неверная сумма для перевода")
    }
  }

  return (
    <Card title="Toncoin">
      <FlexBoxCol>
        <h3>Toncoin</h3>
        <FlexBoxRow>
          <div style={{ whiteSpace: "nowrap" }}>User Wallet:</div>
          <Ellipsis>
            {wallet ? Address.parse(wallet as string).toString() : "Loading..."}
          </Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          <div style={{ whiteSpace: "nowrap" }}>Master Wallet:</div>
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
          <Input type="text" value={transferAmount} readOnly />
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
          Вывести Toncoin
        </Button>
      </FlexBoxCol>
    </Card>
  )
}
