import React from "react"
import styles from "./CardResources.module.scss"

interface CardResourceProps {
  image: string
  value: number
  cost: number
  coinGameIcon: string
  coinIcon: string
}

const CardResources: React.FC<CardResourceProps> = ({
  image,
  value,
  cost,
  coinGameIcon,
  coinIcon,
}) => {
  return (
    <div className={styles.cardResource}>
      <img src={image} alt="Ресурс" />
      <div className={styles.blockImageResource}>
        <span>{`+${value}`}</span>
        <img src={coinGameIcon} alt="Монета_TON" />
      </div>
      <div className={styles.blockMiningResource}>
        <span>{cost}</span>
        <img src={coinIcon} alt="Монета" />
      </div>
      <div className={styles.blockButtonsBuyResource}>
        <button className={styles.buyButton}>Купить</button>
      </div>
    </div>
  )
}

export default CardResources
