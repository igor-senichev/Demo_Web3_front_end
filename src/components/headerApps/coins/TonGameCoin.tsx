import React from "react"
import styles from "./TonGameCoin.module.scss"
import TonGameCoinIcon from "../../../assets/img/TonGmameCoin.svg"

interface TonGameCoinProps {
  amount: number
  disableButtons: boolean
  onClick: () => void
}

const TonGameCoin: React.FC<TonGameCoinProps> = ({
  amount,
  disableButtons,
  onClick,
}) => {
  return (
    <div className={styles.tonGameCoin}>
      <button
        className={`${styles.iconTonBlock} ${
          disableButtons ? styles.disabled : ""
        }`}
        onClick={onClick}
        disabled={disableButtons}
      >
        <img src={TonGameCoinIcon} alt="Ton Game Coin" />
      </button>
      <div className={styles.amountTonGameBlock}>{amount}</div>
    </div>
  )
}

export default TonGameCoin
