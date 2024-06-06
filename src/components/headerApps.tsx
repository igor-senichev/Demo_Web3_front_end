import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./headerApps.module.scss"
import GramCoinIcon from "../assets/img/GramCoin.svg"
import BitCoinIcon from "../assets/img/BitCoin.svg"
import DogCoinIcon from "../assets/img/DogCoin.svg"
import TonGameCoinIcon from "../assets/img/TonGmameCoin.svg"
import EnergyBarIcon from "../assets/img/EnergyBar.svg"
import IconEnergy from "../assets/img/iconEnergy.svg"

interface HeaderAppsProps {
  disableButtons?: boolean
}

const HeaderApps: React.FC<HeaderAppsProps> = ({ disableButtons }) => {
  const navigate = useNavigate()
  const [amountGram, setAmountGram] = useState(0)
  const [amountBit, setAmountBit] = useState(0)
  const [amountDog, setAmountDog] = useState(0)
  const [amountTonGame, setAmountTonGame] = useState(0)
  const valueEnergy = 0
  const finalEnergyValue = "/100"

  const handleAccountClick = () => {
    if (!disableButtons) {
      navigate("/account")
    }
  }

  return (
    <div>
      <div className={styles.coinArea}>
        <div className={styles.blockCoin}>
          <div className={styles.gramCoinBlock}>
            <div className={styles.iconGramBlock}>
              <img src={GramCoinIcon} alt="Gram Coin" />
            </div>
            <div className={styles.amountGramBlock}>{amountGram}</div>
          </div>
          <div className={styles.bitCoinBlock}>
            <div className={styles.iconBitBlock}>
              <img src={BitCoinIcon} alt="Bit Coin" />
            </div>
            <div className={styles.amountBitBlock}>{amountBit}</div>
          </div>
          <div className={styles.dogCoinBlock}>
            <div className={styles.iconDogBlock}>
              <img src={DogCoinIcon} alt="Dog Coin" />
            </div>
            <div className={styles.amountDogBlock}>{amountDog}</div>
          </div>
        </div>
        <div className={styles.tonGameCoin}>
          <button
            className={`${styles.iconTonBlock} ${
              disableButtons ? styles.disabled : ""
            }`}
            onClick={handleAccountClick}
            disabled={disableButtons}
          >
            <img src={TonGameCoinIcon} alt="Ton Game Coin" />
          </button>
          <div className={styles.amountTonGameBlock}>{amountTonGame}</div>
        </div>
      </div>
      <div className={styles.energy}>
        <div className={styles.energyBar}>
          <img src={EnergyBarIcon} alt="Energy Bar" />
        </div>
        <div className={styles.blockValuesEnergy}>
          <div className={styles.valueEnergyBlock}>
            {valueEnergy}
            {finalEnergyValue}
          </div>
          <div className={styles.iconEnergy}>
            <img src={IconEnergy} alt="Icon Energy" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderApps
