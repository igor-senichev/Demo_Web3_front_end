// src/pages/HomePage/HomePage.tsx
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./HomePage.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import BitCoinIcon from "../../assets/img/BitCoin.svg"
import DogCoin from "../../assets/img/DogCoin.svg"
import GramCoin from "../../assets/img/GramCoin.svg"
import ASICIcon from "../../assets/img/ASIC.svg"
import Equipment_ASIC_1 from "../../assets/img/my_Equipment_ASIC_1.svg"
import VideoCard from "../../assets/img/VideoСard.svg"
import Laptop from "../../assets/img/laptop.svg"

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const [amountTonGame, setAmountTonGame] = useState(0.0) // Инициализирую переменную с балансом

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <div className={styles.contentFilling}>
          <span className={styles.sections}>Оборудование</span>
          <div className={styles.ASICBlock}>
            <div className={styles.asicName}>
              <span className={styles.asicText}>Асик</span>
              <div className={styles.ASICMining}>
                <img src={BitCoinIcon} alt="Bit Coin" />
                <span className={styles.miningText}>+ 68 / day</span>
              </div>
            </div>
            <div className={styles.ASICIconBlock}>
              <img src={ASICIcon} alt="ASIC" />
              {/* <img src={Equipment_ASIC_1} alt="ASIC" /> */}
            </div>
          </div>

          <div className={styles.VideoCardBlock}>
            <div className={styles.videoCardName}>
              <span className={styles.videoCardText}>Видеокарты</span>
              <div className={styles.videoCardMining}>
                <img src={DogCoin} alt="Dog Coin" />
                <span className={styles.miningText}>+ 68 / day</span>
              </div>
            </div>
            <div className={styles.VideoCardIconBlock}>
              <div className={styles.iconWrapper}>
                <img src={VideoCard} alt="VideoCard" />
              </div>
              <div className={styles.iconWrapper}>
                <img src={VideoCard} alt="VideoCard" />
              </div>
            </div>
          </div>

          <div className={styles.LaptopBlock}>
            <div className={styles.LaptopName}>
              <span className={styles.LaptopText}>Ноутбуки</span>
              <div className={styles.LaptopMining}>
                <img src={GramCoin} alt="Gram Coin" />
                <span className={styles.miningText}>+ 68 / day</span>
              </div>
            </div>
            <div className={styles.LaptopIconBlock}>
              <div className={styles.iconWrapper}>
                <img src={Laptop} alt="Laptop" />
              </div>
              <div className={styles.iconWrapper}>
                <img src={Laptop} alt="Laptop" />
              </div>
              <div className={styles.iconWrapper}>
                <img src={Laptop} alt="Laptop" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default HomePage
