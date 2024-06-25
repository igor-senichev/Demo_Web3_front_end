import React from "react"
import styles from "./CardProductComponent.module.scss"

interface CardProductComponentProps {
  image: string
  name: string
  price: number
  coinIcon: string
  miningCoins: number
  miningCoinIcon: string
  miningEnergy: number
  energyIcon: string
  rechargeTime: string
}

const CardProductComponent: React.FC<CardProductComponentProps> = ({
  image,
  name,
  price,
  coinIcon,
  miningCoins,
  miningCoinIcon,
  miningEnergy,
  energyIcon,
  rechargeTime,
}) => {
  return (
    <div className={styles.cardProduct}>
      <div className={styles.pictureProduct}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.productInformation}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.pricePproduct}>
          <div className={styles.priceOnePproduct}>{price}</div>
          <div className={styles.iconCoinProduct}>
            <img src={coinIcon} alt="Coin" />
          </div>
        </div>
        <div className={styles.miningCoins}>
          <span>+ {miningCoins}</span>
          <img src={miningCoinIcon} alt="Mining Coin" />
          <span>/ day</span>
        </div>
        <div className={styles.miningEnergy}>
          <span>- {miningEnergy}</span>
          <img src={energyIcon} alt="Energy" />
          <span>/ day</span>
        </div>
        <div className={styles.recharge}>
          <span>Перезарядка: {rechargeTime}</span>
        </div>
        <div className={styles.blockButtonsShopping}>
          <button className={styles.shoppingButton}>Купить</button>
        </div>
      </div>
    </div>
  )
}

export default CardProductComponent
