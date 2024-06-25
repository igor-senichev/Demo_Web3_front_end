import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ExchangingResources.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import CardsExchange from "./components/CardsExchange"
import DogCoinIcon from "../../assets/img/DogCoin.svg"
import GramCoinIcon from "../../assets/img/GramCoin.svg"
import BitCoinIcon from "../../assets/img/BitCoin.svg"
import TonGameCoinIcon from "../../assets/img/TonGmameCoin.svg"

const ExchangingResources: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Обмен ресурсов</span>
        <div className={styles.cardsExchangeWrapper}>
          <CardsExchange
            initialIcon={GramCoinIcon}
            targetIcon={TonGameCoinIcon}
            exchangeRate={0.00035}
          />
          <CardsExchange
            initialIcon={BitCoinIcon}
            targetIcon={TonGameCoinIcon}
            exchangeRate={0.005}
          />
          <CardsExchange
            initialIcon={DogCoinIcon}
            targetIcon={TonGameCoinIcon}
            exchangeRate={0.004}
          />
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default ExchangingResources
