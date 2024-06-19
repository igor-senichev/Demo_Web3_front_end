import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ApplicationLoginPage.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import TONLoginWindow from "../TON_login_window/TONLoginWindow"

const ApplicationLoginPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps disableButtons={true} />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Вход в приложение</span>
        <div className={styles.loginWindowWrapper}>
          <TONLoginWindow />
        </div>
      </div>
      <FooterApps disableButtons={true} />
    </div>
  )
}

export default ApplicationLoginPage
