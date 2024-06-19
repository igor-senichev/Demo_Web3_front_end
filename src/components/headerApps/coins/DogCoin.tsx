import React from "react"
import styles from "./DogCoin.module.scss"
import DogCoinIcon from "../../../assets/img/DogCoin.svg"

interface DogCoinProps {
  amount: number
}

const DogCoin: React.FC<DogCoinProps> = ({ amount }) => {
  return (
    <div className={styles.dogCoinBlock}>
      <div className={styles.iconDogBlock}>
        <img src={DogCoinIcon} alt="Dog Coin" />
      </div>
      <div className={styles.amountDogBlock}>{amount}</div>
    </div>
  )
}

export default DogCoin
