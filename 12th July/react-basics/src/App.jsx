import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Foot } from './Foot'
import { Head } from './Head'
import { FooterBlurb } from './FooterBlurb'
import { Content } from './Content'
import { Feature } from './Feature'
import { blogsData } from '../../../../repo2/react/props/src/components/data'
import Blog from '../../../../repo2/react/props/src/components/Blog'

var bodyText=["The smaller your reality, the more convinced you are that you know everything.", "If the facts don't fit the theory, change the facts.", "The past has no power over the present moment.", "This, too, will pass.", "</p><p>You will not be punished for your anger, you will be punished by your anger.", "Peace comes from within. Do not seek it without.", "<h2>Heading</h2><p>The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now."]
function generateText(sentenceCount){
  let temp = ''
  for (var i=0; i<sentenceCount; i++)
  temp += bodyText[Math.floor(Math.random()*7)]+" ";
  return temp;
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <><div style={{display:'flex', flexWrap:'wrap'}}>
      {blogsData.map((blog,index)=>{
      return <Blog {...blog} />
      })}
      </div>
    </>
  )
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <Head />
//        <Feature />
//        <Content />
//        <FooterBlurb />
//        <Foot />
//     </>
//   )
// }

export {generateText}
export default App
