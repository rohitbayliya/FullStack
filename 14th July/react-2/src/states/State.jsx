import React, { useRef, useState } from 'react'

function State() {
    //re-render => intial loading, state changed , parent re-renders
    //state => component's memory
    //state is immutable 
    //for changing the state use Setter function
    //state preserve value b/w re-renders 
    //when state changes , component re-renders 
    const [count,setCount] = useState(0)
    const myRef = useRef(0)
    const element = useRef(null)
    //Ref vaiable preserve value b/w re-renders 
    //Ref does not re-render component 
    //to access dom element 
    let x = 0 
    function increseVariable() {
        x++
        console.log(x)
    }
    function increase() {
        setCount(count + 1)
    }
     function increaseRef() {
        myRef.current++ 
        console.log(myRef.current)
    }
    function change() {
        element.current.style.color = 'red'
    }
  return (
    <div>
        {x}
     <button onClick={increseVariable} >increase variable</button>
     <br />
     {count}{' '}
     <button onClick={increase} >increase state</button>
     <br />
    {myRef.current}
     <button onClick={increaseRef} >increase Ref</button>
    <br />
    <div ref={element} >hello everyone</div>
    <button onClick={change} >change color</button>
    </div>
  )
}

export default State