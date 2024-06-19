import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PurchasingResources.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"

const PurchasingResources: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Купить ресурсы</span>
      </div>
      <FooterApps />
    </div>
  )
}

export default PurchasingResources
