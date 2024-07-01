import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PersonalAccount.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import TonGameCoinIcon from "../../assets/img/TonGmameCoin.svg"
import { useTonConnect } from "../../hooks/useTonConnect"
import { useAmount } from "../../context/AmountContext"

const PersonalAccount: React.FC = () => {
  const navigate = useNavigate()
  const { disconnect } = useTonConnect() // Получаю функцию для отключения кошелька
  const { amountTonGame } = useAmount() // Получаю баланс из контекста

  const handleLoginClick = () => {
    navigate("/login")
  }

  const handleLoginClick2 = () => {
    navigate("/transfer-of-funds-from-wallet")
  }

  const handleLoginClick3 = () => {
    navigate("/withdrawal-of-funds-to-wallet")
  }

  const handleDisconnectClick = () => {
    disconnect() // Сбрасываю авторизацию кошелька
    navigate("/login")
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
                onClick={handleLoginClick2}
              >
                Депозит
              </button>
              <button
                className={styles.walletButton}
                onClick={handleLoginClick3}
              >
                Вывести
              </button>
            </div>
          </div>
          <button
            className={styles.disconnectButton}
            onClick={handleDisconnectClick}
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
