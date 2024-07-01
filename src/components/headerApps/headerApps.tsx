import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./HeaderApps.module.scss"
import { useAmount } from "../../context/AmountContext"
import SectionCoins from "./SectionCoins"
import SectionEnergy from "./SectionEnergy"
import axios from "axios"

interface HeaderAppsProps {
  disableButtons?: boolean
}

const HeaderApps: React.FC<HeaderAppsProps> = ({ disableButtons }) => {
  const navigate = useNavigate()
  const {
    amountTonGame,
    amountGram,
    setAmountGram,
    amountBit,
    setAmountBit,
    amountDog,
    setAmountDog,
  } = useAmount() // Использую контекст для получения значений

  // Пример получения данных с бэкенда
  // useEffect(() => {
  //   axios.get('/api/coins')
  //     .then(response => {
  //       setAmountGram(response.data.amountGram)
  //       setAmountBit(response.data.amountBit)
  //       setAmountDog(response.data.amountDog)
  //     })
  //     .catch(error => {
  //       console.error("Ошибка при получении данных: ", error)
  //     })
  // }, [setAmountGram, setAmountBit, setAmountDog])

  const handleAccountClick = () => {
    if (!disableButtons) {
      navigate("/account")
    }
  }

  return (
    <div>
      <SectionCoins
        disableButtons={disableButtons || false}
        amountGram={amountGram}
        amountBit={amountBit}
        amountDog={amountDog}
        amountTonGame={amountTonGame}
        onTonGameCoinClick={handleAccountClick}
      />
      <SectionEnergy />
    </div>
  )
}

export default HeaderApps
