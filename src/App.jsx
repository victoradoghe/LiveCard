import { Routes, Route, useNavigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { LandingPage } from './components/LandingPage'
import { DeliveryPage } from './components/DeliveryPage'
import { SetupCardPage } from './components/SetupCardPage'
import { VerificationPage } from './components/VerificationPage'
import { PaymentPage } from './components/PaymentPage'
import { OverviewPage } from './components/OverviewPage'
import './index.css'
import { useState } from 'react'

const App = () => {
  const [CardHolder, SetCardHolder] = useState('Joseph Paul')
  const [CardNumber, SetCardNumber] = useState('1234 5678 9000 1234')
  const [ExpDate, SetExpDate] = useState('12/25')
  const [CVC, SetCVC] = useState('123')
  const navigate = useNavigate();

  // Handlers for the setup flow
  const handleBack = () => {
    navigate(-1);
  }

  const handleContinue = () => {
    navigate('/verification');
  }

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<Layout />}>
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/setup" element={
          <SetupCardPage
            CardHolder={CardHolder} SetCardHolder={SetCardHolder}
            CardNumber={CardNumber} SetCardNumber={SetCardNumber}
            ExpDate={ExpDate} SetExpDate={SetExpDate}
            CVC={CVC} SetCVC={SetCVC}
            onBack={handleBack}
            onContinue={handleContinue}
          />
        } />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Route>
    </Routes>
  )
}

export default App