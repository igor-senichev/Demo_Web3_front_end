import { CHAIN, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react"
import { Address } from "ton-core"
import { SenderArguments } from "ton-core"
import { Sender } from "ton-core"

export function useTonConnect(): {
  sender: Sender
  connected: boolean
  wallet: string | null
  network: CHAIN | null
  disconnect: () => void
} {
  const [tonConnectUI] = useTonConnectUI()
  const wallet = useTonWallet()

  const disconnect = () => {
    if (tonConnectUI && wallet) {
      tonConnectUI.disconnect()
    } else {
      console.error("tonConnectUI or wallet is not available")
    }
  }

  return {
    sender: {
      send: async (args: SenderArguments) => {
        if (tonConnectUI) {
          tonConnectUI.sendTransaction({
            messages: [
              {
                address: args.to.toString(),
                amount: args.value.toString(),
                payload: args.body?.toBoc().toString("base64"),
              },
            ],
            validUntil: Date.now() + 5 * 60 * 1000, // 5 минут на одобрение пользователя
          })
        } else {
          console.error("tonConnectUI is not available")
        }
      },
      address: wallet?.account?.address
        ? Address.parse(wallet?.account?.address as string)
        : undefined,
    },

    connected: !!wallet?.account.address,
    wallet: wallet?.account.address ?? null,
    network: wallet?.account.chain ?? null,
    disconnect,
  }
}
