import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./TransferOfFundsFromWallet.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import TonTranslation from "../TonTranslation/TonTranslation"

const TransferOfFundsFromWallet: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  const handleBackToAccountClick = () => {
    navigate("/account")
  }

  return (
    <div className={styles.container}>
      <HeaderApps disableButtons={false} /> {/* верхняя кнопка активная */}
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Пополнение игрового баланса</span>
        <div className={styles.loginWindowWrapper}>
          <TonTranslation />
        </div>
        <button
          className={styles.backButton}
          onClick={handleBackToAccountClick}
        >
          Вернуться в Личный кабинет
        </button>
      </div>
      <FooterApps disableButtons={true} /> {/* нижние кнопки неактивные */}
    </div>
  )
}

export default TransferOfFundsFromWallet
