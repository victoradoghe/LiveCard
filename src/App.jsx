import { Form } from './components/Form'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Submition } from './components/Submitted'
import './index.css'
import { useState } from 'react'

const App = () => {
  const [CardHolder, SetCardHolder] = useState('')
  const [CardNumber, SetCardNumber] = useState('')
  const [ExpDate, SetExpDate] = useState('')
  const [CVC, SetCVC] = useState('')
  const [Submitted, SetSumitted] = useState(false)
  return(
    <div>
      <Header/>
      <Card CardHolder = {CardHolder} CardNumber = {CardNumber} ExpDate = {ExpDate} CVC = {CVC}/>
      {!Submitted && <Form CardHolder = {CardHolder} CardNumber = {CardNumber} ExpDate = {ExpDate} CVC = {CVC}
      SetCardHolder = { SetCardHolder} SetCardNumber = {SetCardNumber} SetExpDate = {SetExpDate} SetCVC = {SetCVC} onSubmit = {() => SetSumitted(true)}/> } 
      {Submitted && <Submition/>}
      
    </div>
  )
} 





export default App