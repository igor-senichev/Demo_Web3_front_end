import React from "react"
import styles from "./GramCoin.module.scss"
import GramCoinIcon from "../../../assets/img/GramCoin.svg"

interface GramCoinProps {
  amount: number
}

const GramCoin: React.FC<GramCoinProps> = ({ amount }) => {
  return (
    <div className={styles.gramCoinBlock}>
      <div className={styles.iconGramBlock}>
        <img src={GramCoinIcon} alt="Gram Coin" />
      </div>
      <div className={styles.amountGramBlock}>{amount}</div>
    </div>
  )
}

export default GramCoin
