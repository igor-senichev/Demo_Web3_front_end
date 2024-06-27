import React from "react"
import styles from "./CardsFriendsComponent.module.scss"
import BitCoinIcon from "../../../assets/img/BitCoin.svg"
import DogCoinIcon from "../../../assets/img/DogCoin.svg"
import GramCoinIcon from "../../../assets/img/GramCoin.svg"

interface CardsFriendsComponentProps {
  userName: string
  bitcoinValue: string
  dogcoinValue: string
  gramcoinValue: string
}

const CardsFriendsComponent: React.FC<CardsFriendsComponentProps> = ({
  userName,
  bitcoinValue,
  dogcoinValue,
  gramcoinValue,
}) => {
  return (
    <div className={styles.blockCardsFriends}>
      <div className={styles.blockUserNameTG}>
        <span>Игрок:</span>
        <span className={styles.userName}>{userName}</span>
      </div>
      <div className={styles.blockValueBitcoin}>
        <span>{bitcoinValue}</span>
        <img src={BitCoinIcon} alt="BitCoin" />
      </div>
      <div className={styles.blockValueDogcoin}>
        <span>{dogcoinValue}</span>
        <img src={DogCoinIcon} alt="DogCoin" />
      </div>
      <div className={styles.blockValueGramcoin}>
        <span>{gramcoinValue}</span>
        <img src={GramCoinIcon} alt="GramCoin" />
      </div>
    </div>
  )
}

export default CardsFriendsComponent
