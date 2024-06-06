import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ReferralsPage.module.scss"
import HeaderApps from "../../components/headerApps"
import FooterApps from "../../components/footerApps"

const ReferralsPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Рефералы</span>
      </div>
      <FooterApps />
    </div>
  )
}

export default ReferralsPage
