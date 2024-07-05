import React, { useState } from "react"
import styles from "./CardOperationsComponent.module.scss"
import TonGameCoinIcon from "../../../assets/img/TonGmameCoin.svg"
import ArrowUpIcon from "../../../assets/img/arrowUp.svg"
import ArrowDownIcon from "../../../assets/img/arrowDown.svg"

interface CardOperationsComponentProps {
  index: number
  expandedCardIndex: number | null
  setExpandedCardIndex: (index: number | null) => void
  buyingOrSellingValue: string
  dateValue: string
  userWallet: string
  masterWallet: string
  idTransaction: string
}

const CardOperationsComponent: React.FC<CardOperationsComponentProps> = ({
  index,
  expandedCardIndex,
  setExpandedCardIndex,
  buyingOrSellingValue,
  dateValue,
  userWallet,
  masterWallet,
  idTransaction,
}) => {
  const isExpanded = index === expandedCardIndex
  const [showContent, setShowContent] = useState<boolean>(true)

  const toggleExpand = () => {
    if (isExpanded) {
      setShowContent(false)
      setTimeout(() => setExpandedCardIndex(null), 300)
    } else {
      setExpandedCardIndex(index)
      setTimeout(() => setShowContent(true), 300)
    }
  }

  const isReplenishment = buyingOrSellingValue.startsWith("+")
  const senderWallet = isReplenishment ? userWallet : masterWallet
  const recipientWallet = isReplenishment ? masterWallet : userWallet

  return (
    <div
      className={`${styles.blockCardOperations} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
    >
      <div className={styles.blockMainInformation}>
        <div className={styles.blockAmountOperations}>
          <span className={styles.variableAmountsOperations}>
            {buyingOrSellingValue}
          </span>
          <img src={TonGameCoinIcon} alt="TonGameCoin" />
        </div>
        <img
          src={isExpanded ? ArrowUpIcon : ArrowDownIcon}
          alt={isExpanded ? "Arrow Up" : "Arrow Down"}
          className={styles.arrowIcon}
          onClick={toggleExpand}
        />
      </div>
      {isExpanded && (
        <div className={showContent ? styles.show : styles.hide}>
          <div className={styles.divider}></div>

          <div className={styles.blockDetailsOperations}>
            <div className={styles.blockDataName}>Дата операции:</div>
            <div className={styles.blockDateValue}>{dateValue}</div>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.blockSenderWalletOperations}>
            <div className={styles.blockSenderWallet}>Кошелек отправителя:</div>
            <div className={styles.blockSenderWalletAddres}>{senderWallet}</div>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.blockRecipientWalletOperations}>
            <div className={styles.blockRecipientWallet}>
              Кошелек получателя:
            </div>
            <div className={styles.blockRecipientWalletAddres}>
              {recipientWallet}
            </div>
          </div>
          <div className={styles.divider}></div>

          <div className={styles.blockIDTransactionOperations}>
            <div className={styles.blockIDTransaction}>ID транзакция:</div>
            <div className={styles.blockIDTransactionAddres}>
              {idTransaction}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CardOperationsComponent
