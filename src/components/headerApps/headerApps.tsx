import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./HeaderApps.module.scss"
import { useAmount } from "../../context/AmountContext"
import SectionCoins from "./SectionCoins"
import SectionEnergy from "./SectionEnergy"

interface HeaderAppsProps {
  disableButtons?: boolean
}

const HeaderApps: React.FC<HeaderAppsProps> = ({ disableButtons }) => {
  const navigate = useNavigate()
  const { amountTonGame } = useAmount() // Используем контекст для получения значения amountTonGame
  const [amountGram, setAmountGram] = useState(0)
  const [amountBit, setAmountBit] = useState(0)
  const [amountDog, setAmountDog] = useState(0)

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
