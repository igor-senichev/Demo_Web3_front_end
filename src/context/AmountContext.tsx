import React, { createContext, useContext, useState, ReactNode } from "react"

interface AmountContextProps {
  amountTonGame: number
  setAmountTonGame: (amount: number) => void
}

const AmountContext = createContext<AmountContextProps | undefined>(undefined)

export const AmountProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [amountTonGame, setAmountTonGame] = useState(0.05) // Устанавливаю пока начальное значение 0.15, позже эти значения надо будет подтягивать с бека

  return (
    <AmountContext.Provider value={{ amountTonGame, setAmountTonGame }}>
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
