import React from "react"
import styles from "./SectionEnergy.module.scss"
import { useEnergy } from "../../context/EnergyContext"

const SectionEnergy: React.FC = () => {
  const { valueEnergy } = useEnergy() // Используем контекст для получения значения valueEnergy
  const finalEnergyValue = "/100"

  return (
    <div className={styles.energy}>
      <div className={styles.bandEnergy}>
        <div
          className={styles.bandEnergyFill}
          style={{ width: `${100 - valueEnergy}%` }}
        ></div>
      </div>
      <div className={styles.blockValuesEnergy}>
        <div className={styles.valueEnergyBlock}>
          {valueEnergy}
          {finalEnergyValue}
        </div>
      </div>
    </div>
  )
}

export default SectionEnergy
