import React from "react"
import styles from "./BitCoin.module.scss"
import BitCoinIcon from "../../../assets/img/BitCoin.svg"

interface BitCoinProps {
  amount: number
}

const BitCoin: React.FC<BitCoinProps> = ({ amount }) => {
  return (
    <div className={styles.bitCoinBlock}>
      <div className={styles.iconBitBlock}>
        <img src={BitCoinIcon} alt="Bit Coin" />
      </div>
      <div className={styles.amountBitBlock}>{amount}</div>
    </div>
  )
}

export default BitCoin
