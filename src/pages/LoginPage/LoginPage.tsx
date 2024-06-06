import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./LoginPage.module.scss"
import LogotypeIcon from "../../assets/img/logotype.svg"

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/application-login-page")
  }

  return (
    <div className={styles.container}>
      <div className={styles.centralBlock}>
        <div className={styles.contentFilling}>
          <img src={LogotypeIcon} alt="Logotype" />
          <button
            className={styles.authorizationButton}
            onClick={handleLoginClick}
          >
            Подключить кошелек
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
