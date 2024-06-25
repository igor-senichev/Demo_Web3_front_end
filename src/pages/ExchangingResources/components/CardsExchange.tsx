import React, { useState } from "react"
import styles from "./CardsExchange.module.scss"

interface CardsExchangeProps {
  initialIcon: string
  targetIcon: string
  exchangeRate: number
}

const CardsExchange: React.FC<CardsExchangeProps> = ({
  initialIcon,
  targetIcon,
  exchangeRate,
}) => {
  const [valueCoinsExchange, setValueCoinsExchange] = useState<string>("0")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^0+/, "")
    if (value === "" || parseFloat(value) >= 0) {
      // Проверяю, что значение не меньше нуля или пустое
      setValueCoinsExchange(value === "" ? "0" : value) // Если пусто, устанавливаю "0"
    }
  }

  return (
    <div className={styles.blockCardsExchange}>
      <div className={styles.inputValuesBlock}>
        <img src={initialIcon} alt="Initial Coin" />
        <div className={styles.inputWrapper}>
          <input
            type="number"
            className={styles.inputCoinValues}
            value={valueCoinsExchange}
            onChange={handleInputChange}
          />
        </div>
        <span>=</span>
        <img src={targetIcon} alt="Target Coin" />
        <div className={styles.inputWrapper}>
          <input
            type="number"
            className={styles.inputValuesTONCoins}
            value={(parseFloat(valueCoinsExchange) * exchangeRate).toFixed(5)}
            readOnly
          />
        </div>
      </div>
      <div className={styles.blockCurrentRate}>Текущий курс</div>
      <div className={styles.blockRateValue}>
        <span>1</span>
        <img src={initialIcon} alt="Initial Coin" />
        <span>=</span>
        <span>{exchangeRate}</span>
        <img src={targetIcon} alt="Target Coin" />
      </div>
      <div className={styles.blockSharingButtons}>
        <button className={styles.sharingButton}>Обменять</button>
      </div>
    </div>
  )
}

export default CardsExchange
