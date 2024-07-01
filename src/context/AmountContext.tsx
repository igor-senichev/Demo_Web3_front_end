import React, { createContext, useContext, useState, ReactNode } from "react"

interface AmountContextProps {
  amountTonGame: number
  setAmountTonGame: (amount: number) => void
  amountGram: number
  setAmountGram: (amount: number) => void
  amountBit: number
  setAmountBit: (amount: number) => void
  amountDog: number
  setAmountDog: (amount: number) => void
}

const AmountContext = createContext<AmountContextProps | undefined>(undefined)

export const AmountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [amountTonGame, setAmountTonGame] = useState(0.05) // Временное значение, позже эти значения надо будет подтягивать с бека
  const [amountGram, setAmountGram] = useState(5) // Временное значение
  const [amountBit, setAmountBit] = useState(3) // Временное значение
  const [amountDog, setAmountDog] = useState(4) // Временное значение

  return (
    <AmountContext.Provider
      value={{
        amountTonGame,
        setAmountTonGame,
        amountGram,
        setAmountGram,
        amountBit,
        setAmountBit,
        amountDog,
        setAmountDog,
      }}
    >
      {children}
    </AmountContext.Provider>
  )
}

export const useAmount = () => {
  const context = useContext(AmountContext)
  if (!context) {
    throw new Error("useAmount must be used within an AmountProvider")
  }
  return context
}
