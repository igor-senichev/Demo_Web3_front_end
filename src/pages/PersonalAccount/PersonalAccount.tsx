// src/pages/PersonalAccount/PersonalAccount.tsx
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PersonalAccount.module.scss"
import HeaderApps from "../../components/headerApps"
import FooterApps from "../../components/footerApps"
import TonGameCoinIcon from "../../assets/img/TonGmameCoin.svg"

const PersonalAccount: React.FC = () => {
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
          <span className={styles.sections}>Кошелек</span>
          <div className={styles.walletOperations}>
            <div className={styles.walletDetails}>
              <div className={styles.balanceRow}>
                <span className={styles.amountTonGameBlock}>
                  {amountTonGame.toFixed(4)}
                </span>
                <img
                  src={TonGameCoinIcon}
                  alt="Ton Game Coin"
                  className={styles.coinIcon}
                />
              </div>
              <span className={styles.balanceLabel}>Игровой баланс</span>
            </div>
            <div className={styles.walletOptions}>
              <button
                className={styles.walletButton}
                onClick={handleLoginClick}
              >
                Депозит
              </button>
              <button
                className={styles.walletButton}
                onClick={handleLoginClick}
              >
                Вывести
              </button>
            </div>
          </div>
          <button
            className={styles.disconnectButton}
            onClick={handleLoginClick}
          >
            Отключить
          </button>
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default PersonalAccount
