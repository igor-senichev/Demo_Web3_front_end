import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ShopPage.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"

const ShopPage: React.FC = () => {
  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    navigate(path)
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <div className={styles.contentFilling}>
          <span className={styles.sections}>Магазин</span>
          <button
            className={styles.actionButton}
            onClick={() => handleNavigation("/purchasing-resources")}
          >
            Купить ресурсы
          </button>

          <button
            className={styles.actionButton}
            onClick={() => handleNavigation("/exchanging-resources")}
          >
            Обменять ресурсы
          </button>

          <button
            className={styles.actionButton}
            onClick={() => handleNavigation("/craft")}
          >
            Купить оборудование
          </button>

          <button
            className={styles.actionButton}
            onClick={() => handleNavigation("/operations-history")}
          >
            История операций
          </button>
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default ShopPage
