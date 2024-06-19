import { Address } from "ton-core"
import { useTonConnect } from "../hooks/useTonConnect"
import { Card, FlexBoxCol, FlexBoxRow, Button, Ellipsis } from "./styled/styled"

interface JettonSimpleProps {
  balance: number | null
  onNavigate: (page: string) => void
}

export function JettonSimple({ balance, onNavigate }: JettonSimpleProps) {
  const { connected, wallet } = useTonConnect()

  const handleContinueClick = async () => {
    onNavigate("/home")
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
        <FlexBoxRow style={{ marginTop: "20px" }}>
          User wallet balance:
          <div>
            {balance !== null
              ? `${Math.floor(balance * 100) / 100} TON`
              : "Loading..."}
          </div>
        </FlexBoxRow>
        <Button disabled={!connected} onClick={handleContinueClick}>
          Продолжить
        </Button>
      </FlexBoxCol>
    </Card>
  )
}
