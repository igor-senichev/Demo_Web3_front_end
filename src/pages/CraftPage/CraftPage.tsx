import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./CraftPage.module.scss"
import HeaderApps from "../../components/headerApps"
import FooterApps from "../../components/footerApps"

const CraftPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Крафт</span>
      </div>
      <FooterApps />
    </div>
  )
}

export default CraftPage
