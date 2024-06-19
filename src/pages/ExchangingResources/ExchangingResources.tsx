import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ExchangingResources.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"

const ExchangingResources: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Обмен ресурсов</span>
      </div>
      <FooterApps />
    </div>
  )
}

export default ExchangingResources
