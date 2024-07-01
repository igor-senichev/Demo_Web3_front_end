import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ExchangingResources.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import CardsExchange from "./components/CardsExchange"
import DogCoinIcon from "../../assets/img/DogCoin.svg"
import GramCoinIcon from "../../assets/img/GramCoin.svg"
import BitCoinIcon from "../../assets/img/BitCoin.svg"
import TonGameCoinIcon from "../../assets/img/TonGmameCoin.svg"
import axios from "axios"
import { useAmount } from "../../context/AmountContext"

const ExchangingResources: React.FC = () => {
  const navigate = useNavigate()
  const { amountGram, amountBit, amountDog } = useAmount() // Получаем количество монет из контекста
  const [exchangeRates, setExchangeRates] = useState({
    gram: 0.00035,
    bit: 0.005,
    dog: 0.004,
  }) // Временные значения

  // Пример получения данных с бэкенда
  // useEffect(() => {
  //   axios
  //     .get("/api/exchangeRates")
  //     .then((response) => {
  //       setExchangeRates({
  //         gram: response.data.gram,
  //         bit: response.data.bit,
  //         dog: response.data.dog,
  //       })
  //     })
  //     .catch((error) => {
  //       console.error("Ошибка при получении данных: ", error)
  //     })
  // }, [])

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Обмен ресурсов</span>
        <div className={styles.cardsExchangeWrapper}>
          <CardsExchange
            initialIcon={GramCoinIcon}
            targetIcon={TonGameCoinIcon}
            exchangeRate={exchangeRates.gram}
            maxAmount={amountGram} // максимальное количество GramCoin
          />
          <CardsExchange
            initialIcon={BitCoinIcon}
            targetIcon={TonGameCoinIcon}
            exchangeRate={exchangeRates.bit}
            maxAmount={amountBit} // максимальное количество BitCoin
          />
          <CardsExchange
            initialIcon={DogCoinIcon}
            targetIcon={TonGameCoinIcon}
            exchangeRate={exchangeRates.dog}
            maxAmount={amountDog} // максимальное количество DogCoin
          />
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default ExchangingResources
