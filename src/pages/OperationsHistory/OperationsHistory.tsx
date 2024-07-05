import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./OperationsHistory.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import CardOperationsComponent from "./components/CardOperationsComponent"

const OperationsHistory: React.FC = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<string>("All")
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  )

  const handleFilterChange = (type: string) => {
    setFilter(type)
    setExpandedCardIndex(null) // Сбрасываем состояние раскрытия карточек
  }

  const operations = [
    {
      buyingOrSellingValue: "- 68 000",
      dateValue: "23.02.2024",
      userWallet: "EQCwyY1m4617e5_aF1gduogkq288XGL7YhK5KRzUqlVM3t4M",
      masterWallet: "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9",
      idTransaction: "8764838475897857893",
    },
    {
      buyingOrSellingValue: "+ 10 000",
      dateValue: "24.02.2024",
      userWallet: "EQCwyY1m4617e5_aF1gduogkq288XGL7YhK5KRzUqlVM3t4M",
      masterWallet: "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9",
      idTransaction: "8764838475897857894",
    },
    {
      buyingOrSellingValue: "- 5 000",
      dateValue: "25.02.2024",
      userWallet: "EQCwyY1m4617e5_aF1gduogkq288XGL7YhK5KRzUqlVM3t4M",
      masterWallet: "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9",
      idTransaction: "8764838475897857895",
    },
    {
      buyingOrSellingValue: "+ 20 000",
      dateValue: "26.02.2024",
      userWallet: "EQCwyY1m4617e5_aF1gduogkq288XGL7YhK5KRzUqlVM3t4M",
      masterWallet: "EQA50bCTQLaKz3p6HWAsIqmlcpePWK8IcGZ3xbaVSnZo2zZ9",
      idTransaction: "8764838475897857896",
    },
  ]

  const filteredOperations = operations.filter((operation) => {
    if (filter === "All") return true
    if (
      filter === "Replenishment" &&
      operation.buyingOrSellingValue.startsWith("+")
    )
      return true
    if (filter === "Output" && operation.buyingOrSellingValue.startsWith("-"))
      return true
    return false
  })

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>История операций</span>
        <div className={styles.blockFilterOperations}>
          <button
            className={`${styles.buttonFilter} ${
              filter === "All" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("All")}
          >
            Все
          </button>
          <button
            className={`${styles.buttonFilter} ${
              filter === "Replenishment" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Replenishment")}
          >
            Пополнение
          </button>
          <button
            className={`${styles.buttonFilter} ${
              filter === "Output" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Output")}
          >
            Списание
          </button>
        </div>
        <div className={styles.cardsContainer}>
          {filteredOperations.map((operation, index) => (
            <CardOperationsComponent
              key={index}
              index={index}
              expandedCardIndex={expandedCardIndex}
              setExpandedCardIndex={setExpandedCardIndex}
              buyingOrSellingValue={operation.buyingOrSellingValue}
              dateValue={operation.dateValue}
              userWallet={operation.userWallet}
              masterWallet={operation.masterWallet}
              idTransaction={operation.idTransaction}
            />
          ))}
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default OperationsHistory
