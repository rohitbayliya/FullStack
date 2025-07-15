import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {studentData as StudentData } from './components/student-data.js'
import Student from './components/sutdent.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> <div>
      {StudentData.map((stud,index)=>{
      return <Student {...stud} />
      })}
      </div>
    </>
  )
}

export default App
