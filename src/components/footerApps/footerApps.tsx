import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import styles from "./footerApps.module.scss"
import HomeIcon from "../../assets/img/home.svg"
import CraftingToolsIcon from "../../assets/img/craftingTools.svg"
import RefSystemIcon from "../../assets/img/refSystem.svg"
import ShopIcon from "../../assets/img/shop.svg"

interface FooterAppsProps {
  disableButtons?: boolean
}

const FooterApps: React.FC<FooterAppsProps> = ({ disableButtons }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (path: string) => {
    if (!disableButtons) {
      navigate(path)
    }
  }

  return (
    <div className={styles.bottomBlock}>
      <button
        className={`${styles.navButton} ${
          location.pathname === "/home" ? styles.active : ""
        } ${disableButtons ? styles.disabled : ""}`}
        onClick={() => handleNavigation("/home")}
        disabled={disableButtons}
      >
        <img src={HomeIcon} alt="Home" />
      </button>
      <button
        className={`${styles.navButton} ${
          location.pathname === "/craft" ? styles.active : ""
        } ${disableButtons ? styles.disabled : ""}`}
        onClick={() => handleNavigation("/craft")}
        disabled={disableButtons}
      >
        <img src={CraftingToolsIcon} alt="Crafting Tools" />
      </button>
      <button
        className={`${styles.navButton} ${
          location.pathname === "/referrals" ? styles.active : ""
        } ${disableButtons ? styles.disabled : ""}`}
        onClick={() => handleNavigation("/referrals")}
        disabled={disableButtons}
      >
        <img src={RefSystemIcon} alt="Ref System" />
      </button>
      <button
        className={`${styles.navButton} ${
          location.pathname === "/shop" ? styles.active : ""
        } ${disableButtons ? styles.disabled : ""}`}
        onClick={() => handleNavigation("/shop")}
        disabled={disableButtons}
      >
        <img src={ShopIcon} alt="Shop" />
      </button>
    </div>
  )
}

export default FooterApps
