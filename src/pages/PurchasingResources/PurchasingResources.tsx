import React, { useState } from "react"
import styles from "./PurchasingResources.module.scss"
import CardResources from "./components/CardResources"
import BitCoinIcon from "../../assets/img/BitCoin.svg"
import DogCoinIcon from "../../assets/img/DogCoin.svg"
import GramCoinIcon from "../../assets/img/GramCoin.svg"
import TonGameCoinIcon from "../../assets/img/TonGmameCoin.svg"
import ResourceBitcoin1 from "../../assets/img/Resource_Bitcoin_1.svg"
import ResourceBitcoin10 from "../../assets/img/Resource_Bitcoin_10.svg"
import ResourceBitcoin100 from "../../assets/img/Resource_Bitcoin_100.svg"
import ResourceBitcoin1000 from "../../assets/img/Resource_Bitcoin_1000.svg"
import ResourceDogcoin1 from "../../assets/img/Resource_Dogcoin_1.svg"
import ResourceDogcoin10 from "../../assets/img/Resource_Dogcoin_10.svg"
import ResourceDogcoin100 from "../../assets/img/Resource_Dogcoin_100.svg"
import ResourceDogcoin1000 from "../../assets/img/Resource_Dogcoin_1000.svg"
import ResourceGram1 from "../../assets/img/Resource_Gram_1.svg"
import ResourceGram10 from "../../assets/img/Resource_Gram_10.svg"
import ResourceGram100 from "../../assets/img/Resource_Gram_100.svg"
import ResourceGram1000 from "../../assets/img/Resource_Gram_1000.svg"
import FooterApps from "../../components/footerApps/footerApps"
import HeaderApps from "../../components/headerApps/headerApps"

const resourcesData = [
  {
    image: ResourceBitcoin1,
    value: 68,
    cost: 1,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: BitCoinIcon,
  },
  {
    image: ResourceDogcoin1,
    value: 68,
    cost: 1,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: DogCoinIcon,
  },
  {
    image: ResourceGram1,
    value: 68,
    cost: 1,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: GramCoinIcon,
  },
  {
    image: ResourceBitcoin10,
    value: 680,
    cost: 10,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: BitCoinIcon,
  },
  {
    image: ResourceDogcoin10,
    value: 680,
    cost: 10,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: DogCoinIcon,
  },
  {
    image: ResourceGram10,
    value: 680,
    cost: 10,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: GramCoinIcon,
  },
  {
    image: ResourceBitcoin100,
    value: 6800,
    cost: 100,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: BitCoinIcon,
  },
  {
    image: ResourceDogcoin100,
    value: 6800,
    cost: 100,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: DogCoinIcon,
  },
  {
    image: ResourceGram100,
    value: 6800,
    cost: 100,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: GramCoinIcon,
  },
  {
    image: ResourceBitcoin1000,
    value: 68000,
    cost: 1000,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: BitCoinIcon,
  },
  {
    image: ResourceDogcoin1000,
    value: 68000,
    cost: 1000,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: DogCoinIcon,
  },
  {
    image: ResourceGram1000,
    value: 68000,
    cost: 1000,
    coinGameIcon: TonGameCoinIcon,
    coinIcon: GramCoinIcon,
  },
]

const PurchasingResources: React.FC = () => {
  const [filter, setFilter] = useState<string>("BitCoin")

  const handleFilterChange = (type: string) => {
    setFilter(type)
  }

  const filteredResources = resourcesData.filter((resource) => {
    if (filter === "BitCoin") {
      return resource.coinIcon === BitCoinIcon
    } else if (filter === "DogCoin") {
      return resource.coinIcon === DogCoinIcon
    } else if (filter === "GramCoin") {
      return resource.coinIcon === GramCoinIcon
    }
    return true
  })

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Купить ресурсы</span>
        <div className={styles.blockFilterResources}>
          <button
            className={`${styles.filterButton} ${
              filter === "BitCoin" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("BitCoin")}
          >
            <img src={BitCoinIcon} alt="BitCoin" />
          </button>
          <button
            className={`${styles.filterButton} ${
              filter === "DogCoin" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("DogCoin")}
          >
            <img src={DogCoinIcon} alt="DogCoin" />
          </button>
          <button
            className={`${styles.filterButton} ${
              filter === "GramCoin" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("GramCoin")}
          >
            <img src={GramCoinIcon} alt="GramCoin" />
          </button>
        </div>
        <div className={styles.spacing}></div>

        <div className={styles.blockCardResources}>
          {filteredResources.map((data, index) => (
            <div key={index} className={styles.card}>
              <CardResources
                image={data.image}
                value={data.value}
                cost={data.cost}
                coinGameIcon={data.coinGameIcon}
                coinIcon={data.coinIcon}
              />
            </div>
          ))}
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default PurchasingResources
