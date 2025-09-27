import { useState } from 'react'

import './App.css'
import PlanComparisonScreen from './Componentes/PlanComparisonScreen.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <PlanComparisonScreen/>
    </>
  )
}

export default App
