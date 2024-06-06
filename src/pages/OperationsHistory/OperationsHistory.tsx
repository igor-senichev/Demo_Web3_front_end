import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./OperationsHistory.module.scss"
import HeaderApps from "../../components/headerApps"
import FooterApps from "../../components/footerApps"

const OperationsHistory: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>История операций</span>
      </div>
      <FooterApps />
    </div>
  )
}

export default OperationsHistory
