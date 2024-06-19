import React from "react"
import GramCoin from "./coins/GramCoin"
import BitCoin from "./coins/BitCoin"
import DogCoin from "./coins/DogCoin"
import TonGameCoin from "./coins/TonGameCoin"
import styles from "./SectionCoins.module.scss"

interface SectionCoinsProps {
  disableButtons: boolean
  amountGram: number
  amountBit: number
  amountDog: number
  amountTonGame: number
  onTonGameCoinClick: () => void
}

const SectionCoins: React.FC<SectionCoinsProps> = ({
  disableButtons,
  amountGram,
  amountBit,
  amountDog,
  amountTonGame,
  onTonGameCoinClick,
}) => {
  return (
    <div className={styles.coinArea}>
      <div className={styles.blockCoin}>
        <GramCoin amount={amountGram} />
        <BitCoin amount={amountBit} />
        <DogCoin amount={amountDog} />
      </div>
      <TonGameCoin
        amount={amountTonGame}
        disableButtons={disableButtons}
        onClick={onTonGameCoinClick}
      />
    </div>
  )
}

export default SectionCoins
