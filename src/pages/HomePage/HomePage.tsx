import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styles from "./HomePage.module.scss"
import HeaderApps from "../../components/headerApps/headerApps"
import FooterApps from "../../components/footerApps/footerApps"
import BitCoinIcon from "../../assets/img/BitCoin.svg"
import DogCoin from "../../assets/img/DogCoin.svg"
import GramCoin from "../../assets/img/GramCoin.svg"
import ASICIcon from "../../assets/img/ASIC.svg"
import VideoCard from "../../assets/img/VideoСard.svg"
import Laptop from "../../assets/img/laptop.svg"
import Equipment_ASIC_1 from "../../assets/img/my_Equipment_ASIC_1.svg"
import Equipment_ASIC_2 from "../../assets/img/my_Equipment_ASIC_2.svg"
import Equipment_ASIC_3 from "../../assets/img/my_Equipment_ASIC_3.svg"
import Equipment_ASIC_4 from "../../assets/img/my_Equipment_ASIC_4.svg"
import Equipment_VideoСard_1 from "../../assets/img/my_Equipment_VideoСard_1.svg"
import Equipment_VideoСard_2 from "../../assets/img/my_Equipment_VideoСard_2.svg"
import Equipment_VideoСard_3 from "../../assets/img/my_Equipment_VideoСard_3.svg"
import Equipment_VideoСard_4 from "../../assets/img/my_Equipment_VideoСard_4.svg"
import Equipment_Laptop_1 from "../../assets/img/my_Equipment_Laptop_1.svg"
import Equipment_Laptop_2 from "../../assets/img/my_Equipment_Laptop_2.svg"
import Equipment_Laptop_3 from "../../assets/img/my_Equipment_Laptop_3.svg"
import Equipment_Laptop_4 from "../../assets/img/my_Equipment_Laptop_4.svg"

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const initialEquipment = [
    {
      type: "ASIC",
      image: Equipment_ASIC_1,
    },
    {
      type: "ASIC",
      image: Equipment_ASIC_3,
    },
    {
      type: "VideoCard",
      image: Equipment_VideoСard_3,
    },
    {
      type: "VideoCard",
      image: Equipment_VideoСard_2,
    },
    {
      type: "VideoCard",
      image: Equipment_VideoСard_1,
    },
    {
      type: "Laptop",
      image: Equipment_Laptop_4,
    },
    {
      type: "Laptop",
      image: Equipment_Laptop_2,
    },
  ]

  const [variableMiningAsic, setVariableMiningAsic] = useState(68)
  const [variableMiningVideoCard, setVariableMiningVideoCard] = useState(58)
  const [variableMiningLaptop, setVariableMiningLaptop] = useState(48)
  const [equipment, setEquipment] = useState(initialEquipment)

  const getMostPowerfulEquipment = (
    equipment: string[],
    maxCount: number,
    defaultIcon: string
  ) => {
    const sortedEquipment = equipment.sort((a, b) => {
      const aPower = parseInt(a.match(/(\d+)\.svg$/)?.[1] || "0", 10)
      const bPower = parseInt(b.match(/(\d+)\.svg$/)?.[1] || "0", 10)
      return bPower - aPower
    })

    const displayedEquipment = sortedEquipment.slice(0, maxCount)
    while (displayedEquipment.length < maxCount) {
      displayedEquipment.push(defaultIcon)
    }

    return displayedEquipment
  }

  // Пример получения с бекенда
  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("/api/mining-values")
  //     const { miningValues, equipment } = response.data
  //     setVariableMiningAsic(miningValues.variableMiningAsic)
  //     setVariableMiningVideoCard(miningValues.variableMiningVideoCard)
  //     setVariableMiningLaptop(miningValues.variableMiningLaptop)
  //     setEquipment(equipment)
  //   } catch (error) {
  //     console.error("Error fetching mining values and equipment:", error)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const asicEquipment = equipment
    .filter((e) => e.type.trim() === "ASIC")
    .map((e) => e.image)
  const videoCardEquipment = equipment
    .filter((e) => e.type.trim() === "VideoCard")
    .map((e) => e.image)
  const laptopEquipment = equipment
    .filter((e) => e.type.trim() === "Laptop")
    .map((e) => e.image)

  const asicIcons = getMostPowerfulEquipment(asicEquipment, 1, ASICIcon)
  const videoCardIcons = getMostPowerfulEquipment(
    videoCardEquipment,
    2,
    VideoCard
  )
  const laptopIcons = getMostPowerfulEquipment(laptopEquipment, 3, Laptop)

  return (
    <div className={styles.container}>
      <HeaderApps />
      <div className={styles.centralBlock}>
        <div className={styles.contentFilling}>
          <span className={styles.sections}>Оборудование</span>
          <div className={styles.ASICBlock}>
            <div className={styles.asicName}>
              <span className={styles.asicText}>Асик</span>
              <div className={styles.ASICMining}>
                <img src={BitCoinIcon} alt="Bit Coin" />
                <span className={styles.miningText}>
                  + {variableMiningAsic} / day
                </span>
              </div>
            </div>
            <div className={styles.ASICIconBlock}>
              <img src={asicIcons[0]} alt="ASIC" />
            </div>
          </div>

          <div className={styles.VideoCardBlock}>
            <div className={styles.videoCardName}>
              <span className={styles.videoCardText}>Видеокарты</span>
              <div className={styles.videoCardMining}>
                <img src={DogCoin} alt="Dog Coin" />
                <span className={styles.miningText}>
                  + {variableMiningVideoCard} / day
                </span>
              </div>
            </div>
            <div className={styles.VideoCardIconBlock}>
              {videoCardIcons.map((icon, index) => (
                <div className={styles.iconWrapper} key={index}>
                  <img src={icon} alt="VideoCard" />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.LaptopBlock}>
            <div className={styles.LaptopName}>
              <span className={styles.LaptopText}>Ноутбуки</span>
              <div className={styles.LaptopMining}>
                <img src={GramCoin} alt="Gram Coin" />
                <span className={styles.miningText}>
                  + {variableMiningLaptop} / day
                </span>
              </div>
            </div>
            <div className={styles.LaptopIconBlock}>
              {laptopIcons.map((icon, index) => (
                <div className={styles.iconWrapper} key={index}>
                  <img src={icon} alt="Laptop" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterApps />
    </div>
  )
}

export default HomePage
