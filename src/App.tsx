import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import ShopPage from "./pages/ShopPage/ShopPage"
import TONLoginWindow from "./pages/TON_login_window/TONLoginWindow"
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount"
import HomePage from "./pages/HomePage/HomePage"
import CraftPage from "./pages/CraftPage/CraftPage"
import ReferralsPage from "./pages/ReferralsPage/ReferralsPage"
import OperationsHistory from "./pages/OperationsHistory/OperationsHistory"
import ExchangingResources from "./pages/ExchangingResources/ExchangingResources"
import PurchasingResources from "./pages/PurchasingResources/PurchasingResources"
import ApplicationLoginPage from "./pages/ApplicationLoginPage/ApplicationLoginPage"

function App() {
  return (
    <Router basename="/Demo_Web3_front_end">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/application-login-page"
          element={<ApplicationLoginPage />}
        />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/craft" element={<CraftPage />} />
        <Route path="/referrals" element={<ReferralsPage />} />
        <Route path="/operations-history" element={<OperationsHistory />} />
        <Route path="/exchanging-resources" element={<ExchangingResources />} />
        <Route path="/purchasing-resources" element={<PurchasingResources />} />
        <Route path="/account" element={<PersonalAccount />} />
        <Route path="/ton-login" element={<TONLoginWindow />} />
      </Routes>
    </Router>
  )
}

export default App
