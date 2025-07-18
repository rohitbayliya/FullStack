import { useState } from 'react'
import './App.css'
import TabComp from './components/TabComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TabComp />
    </>
  )
}

export default App
