import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react"

interface EnergyContextProps {
  valueEnergy: number
}

const EnergyContext = createContext<EnergyContextProps | undefined>(undefined)

export const EnergyProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [valueEnergy, setValueEnergy] = useState(0)

  useEffect(() => {
    const updateEnergyValue = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      //Вычисляю общее количество минут с начала дня:
      const totalMinutes = hours * 60 + minutes
      //Расчет значения энергии в процентах
      const value = Math.floor((totalMinutes / (24 * 60)) * 100)
      setValueEnergy(value)
    }

    updateEnergyValue()
    const intervalId = setInterval(updateEnergyValue, 60000) // Обновляем каждую минуту

    return () => clearInterval(intervalId)
  }, [])

  return (
    <EnergyContext.Provider value={{ valueEnergy }}>
      {children}
    </EnergyContext.Provider>
  )
}

export const useEnergy = () => {
  const context = useContext(EnergyContext)
  if (!context) {
    throw new Error("useEnergy must be used within an EnergyProvider")
  }
  return context
}
