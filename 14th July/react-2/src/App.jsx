import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {studentData as StudentData } from './components/student-data.js'
import Student from './components/sutdent.jsx'
import State from './states/State.jsx'
import Form from './states/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <> <div>
  //     {StudentData.map((stud,index)=>{
  //     return <Student {...stud} />
  //     })}
  //     </div>
  //   </>
  // )

  return (
    <>
     {/* <State /> */}
     <Form />
    </>
  )
}

export default App
