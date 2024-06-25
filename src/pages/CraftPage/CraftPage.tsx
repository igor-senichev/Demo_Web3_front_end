import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./CraftPage.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import CardProductComponent from "../CraftPage/components/CardProductComponent"
import EquipmentASIC1 from "../../assets/img/equipment_ASIC_1.svg"
import EquipmentASIC2 from "../../assets/img/equipment_ASIC_2.svg"
import EquipmentASIC3 from "../../assets/img/equipment_ASIC_3.svg"
import EquipmentASIC4 from "../../assets/img/equipment_ASIC_4.svg"
import EquipmentVideoСard1 from "../../assets/img/equipment_VideoСard_1.svg"
import EquipmentVideoСard2 from "../../assets/img/equipment_VideoСard_2.svg"
import EquipmentVideoСard3 from "../../assets/img/equipment_VideoСard_3.svg"
import EquipmentVideoСard4 from "../../assets/img/equipment_VideoСard_4.svg"
import EquipmentLaptop1 from "../../assets/img/equipment_Laptop_1.svg"
import EquipmentLaptop2 from "../../assets/img/equipment_Laptop_2.svg"
import EquipmentLaptop3 from "../../assets/img/equipment_Laptop_3.svg"
import EquipmentLaptop4 from "../../assets/img/equipment_Laptop_4.svg"
import BitCoinIcon from "../../assets/img/BitCoin.svg"
import DogCoinIcon from "../../assets/img/DogCoin.svg"
import GramCoinIcon from "../../assets/img/GramCoin.svg"
import EnergyIcon from "../../assets/img/iconEnergy.svg"
import CraftIconASIC from "../../assets/img/Craft_Icon_ASIC.svg"
import CraftIconLaptop from "../../assets/img/Craft_Icon_Laptop.svg"
import CraftIconVideoCard from "../../assets/img/Craft_Icon_VideoCard.svg"

const products = [
  {
    type: "ASIC",
    image: EquipmentASIC1,
    name: "Асик базовый",
    price: 6800,
    coinIcon: BitCoinIcon,
    miningCoins: 10,
    miningCoinIcon: BitCoinIcon,
    miningEnergy: 68,
    energyIcon: EnergyIcon,
    rechargeTime: "1 час",
  },
  {
    type: "ASIC",
    image: EquipmentASIC2,
    name: "Асик стандарт",
    price: 7200,
    coinIcon: BitCoinIcon,
    miningCoins: 15,
    miningCoinIcon: BitCoinIcon,
    miningEnergy: 63,
    energyIcon: EnergyIcon,
    rechargeTime: "2 часа",
  },
  {
    type: "ASIC",
    image: EquipmentASIC3,
    name: "Асик апгрейд",
    price: 7800,
    coinIcon: BitCoinIcon,
    miningCoins: 20,
    miningCoinIcon: BitCoinIcon,
    miningEnergy: 60,
    energyIcon: EnergyIcon,
    rechargeTime: "3 час",
  },
  {
    type: "ASIC",
    image: EquipmentASIC4,
    name: "Асик прогресс",
    price: 8500,
    coinIcon: BitCoinIcon,
    miningCoins: 25,
    miningCoinIcon: BitCoinIcon,
    miningEnergy: 55,
    energyIcon: EnergyIcon,
    rechargeTime: "4 часа",
  },
  {
    type: "VideoCard",
    image: EquipmentVideoСard1,
    name: "Видеокарта базовая",
    price: 5000,
    coinIcon: BitCoinIcon,
    miningCoins: 30,
    miningCoinIcon: DogCoinIcon,
    miningEnergy: 68,
    energyIcon: EnergyIcon,
    rechargeTime: "1 час",
  },
  {
    type: "VideoCard",
    image: EquipmentVideoСard2,
    name: "Видеокарта стандарт",
    price: 5200,
    coinIcon: BitCoinIcon,
    miningCoins: 35,
    miningCoinIcon: DogCoinIcon,
    miningEnergy: 63,
    energyIcon: EnergyIcon,
    rechargeTime: "2 часа",
  },
  {
    type: "VideoCard",
    image: EquipmentVideoСard3,
    name: "Видеокарта апгрейд",
    price: 5800,
    coinIcon: BitCoinIcon,
    miningCoins: 40,
    miningCoinIcon: DogCoinIcon,
    miningEnergy: 60,
    energyIcon: EnergyIcon,
    rechargeTime: "3 час",
  },
  {
    type: "VideoCard",
    image: EquipmentVideoСard4,
    name: "Видеокарта прогресс",
    price: 6500,
    coinIcon: BitCoinIcon,
    miningCoins: 45,
    miningCoinIcon: DogCoinIcon,
    miningEnergy: 55,
    energyIcon: EnergyIcon,
    rechargeTime: "4 часа",
  },
  {
    type: "Laptop",
    image: EquipmentLaptop1,
    name: "Ноутбук базовый",
    price: 3000,
    coinIcon: BitCoinIcon,
    miningCoins: 30,
    miningCoinIcon: GramCoinIcon,
    miningEnergy: 68,
    energyIcon: EnergyIcon,
    rechargeTime: "1 час",
  },
  {
    type: "Laptop",
    image: EquipmentLaptop2,
    name: "Ноутбук стандарт",
    price: 3200,
    coinIcon: BitCoinIcon,
    miningCoins: 35,
    miningCoinIcon: GramCoinIcon,
    miningEnergy: 63,
    energyIcon: EnergyIcon,
    rechargeTime: "2 часа",
  },
  {
    type: "Laptop",
    image: EquipmentLaptop3,
    name: "Ноутбук апгрейд",
    price: 3800,
    coinIcon: BitCoinIcon,
    miningCoins: 40,
    miningCoinIcon: GramCoinIcon,
    miningEnergy: 60,
    energyIcon: EnergyIcon,
    rechargeTime: "3 час",
  },
  {
    type: "Laptop",
    image: EquipmentLaptop4,
    name: "Ноутбук прогресс",
    price: 4500,
    coinIcon: BitCoinIcon,
    miningCoins: 45,
    miningCoinIcon: GramCoinIcon,
    miningEnergy: 55,
    energyIcon: EnergyIcon,
    rechargeTime: "4 часа",
  },
]

const CraftPage: React.FC = () => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState<string | null>("ASIC") // Установил фильтр по умолчанию на "ASIC"

  const handleFilterChange = (type: string) => {
    setFilter(type)
  }

  const filteredProducts = filter
    ? products.filter((product) => product.type === filter)
    : products

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <span className={styles.sections}>Крафт</span>
        <div className={styles.blockFilterEquipment}>
          <button
            className={`${styles.filterButton} ${
              filter === "ASIC" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("ASIC")}
          >
            <img src={CraftIconASIC} alt="ASIC" />
          </button>

          <button
            className={`${styles.filterButton} ${
              filter === "VideoCard" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("VideoCard")}
          >
            <img src={CraftIconVideoCard} alt="Video Card" />
          </button>

          <button
            className={`${styles.filterButton} ${
              filter === "Laptop" ? styles.active : ""
            }`}
            onClick={() => handleFilterChange("Laptop")}
          >
            <img src={CraftIconLaptop} alt="Laptop" />
          </button>
        </div>
        <div className={styles.cardGrid}>
          {filteredProducts.map((product, index) => (
            <div className={styles.cardWrapper} key={index}>
              <CardProductComponent {...product} />
            </div>
          ))}
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default CraftPage
