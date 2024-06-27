import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ReferralsPage.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import RefSystemIcon from "../../assets/img/refSystem.svg"
import CardsFriendsComponent from "./components/CardsFriendsComponent"

const ReferralsPage: React.FC = () => {
  const navigate = useNavigate()
  const [variableNumberReferrals, setVariableNumberReferrals] =
    useState<number>(5)
  const [friendsData, setFriendsData] = useState([
    {
      userName: "@friend1",
      bitcoinValue: "+ 68",
      dogcoinValue: "+ 68",
      gramcoinValue: "+ 68",
    },
    {
      userName: "@friend2",
      bitcoinValue: "+ 50",
      dogcoinValue: "+ 50",
      gramcoinValue: "+ 50",
    },
    {
      userName: "@friend3",
      bitcoinValue: "+ 30",
      dogcoinValue: "+ 30",
      gramcoinValue: "+ 30",
    },
    {
      userName: "@friend4",
      bitcoinValue: "+ 20",
      dogcoinValue: "+ 20",
      gramcoinValue: "+ 20",
    },

    {
      userName: "@friend5",
      bitcoinValue: "+ 68",
      dogcoinValue: "+ 68",
      gramcoinValue: "+ 68",
    },
  ])

  const handleLoginClick = () => {
    navigate("#")
  }

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Рефералы</span>
        <div className={styles.blockReferralsFriends}>
          <div className={styles.blockNumberReferrals}>
            <span>1 линия</span>
            <div className={styles.blockSpecificNumberReferrals}>
              <img src={RefSystemIcon} alt="Ref System" />
              <span className={styles.variableNumberReferrals}>
                {variableNumberReferrals}
              </span>
            </div>
          </div>
          <div className={styles.blockButtonsReferral}>
            <button className={styles.buttonsReferralAdd}>
              + Пригласить друга
            </button>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {friendsData.map((friend, index) => (
            <CardsFriendsComponent
              key={index}
              userName={friend.userName}
              bitcoinValue={friend.bitcoinValue}
              dogcoinValue={friend.dogcoinValue}
              gramcoinValue={friend.gramcoinValue}
            />
          ))}
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default ReferralsPage
