import React, { useState } from "react"
import styles from "./CardsExchange.module.scss"
import { useAmount } from "../../../context/AmountContext"

interface CardsExchangeProps {
  initialIcon: string
  targetIcon: string
  exchangeRate: number
  maxAmount: number // Добавляю пропс для максимального значения монет
}

const CardsExchange: React.FC<CardsExchangeProps> = ({
  initialIcon,
  targetIcon,
  exchangeRate,
  maxAmount,
}) => {
  const [valueCoinsExchange, setValueCoinsExchange] = useState<string>("0")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // Удаляю начальные нули, кроме случая, когда значение равно "0"
    if (value !== "0") {
      value = value.replace(/^0+/, "")
    }

    const parsedValue = parseFloat(value)

    if (value === "" || (parsedValue >= 0 && parsedValue <= maxAmount)) {
      setValueCoinsExchange(value === "" ? "0" : value)
    } else if (parsedValue > maxAmount) {
      setValueCoinsExchange(maxAmount.toString())
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
            min="0"
            max={maxAmount.toString()}
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
