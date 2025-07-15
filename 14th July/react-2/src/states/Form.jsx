import React, { useState } from 'react'
function Form() {
    // const [name,setName] = useState('')
    // const [password,setPassword] = useState('')
    const [show,setShow] = useState(false)
    const [user,setUser] = useState({
        name:'',
        password:''
    })
   const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
   }
   const handleSubmit=(e)=>{
    e.preventDefault()
    setShow(true)
   }
  return (
    <div>
        <form onSubmit={handleSubmit} >
       <label htmlFor="">Name : </label> 
       <input type="text" name='name' onChange={handleChange} value={user.name} />
        <br />
        <label htmlFor="">password</label>
        <input type="text" name='password' onChange={handleChange} 
        value={user.password} /> <br />
        <input type="submit" value="submit" />
        </form>
       { show &&  <div>
            name:- {user.name} <br />
            password : - {user.password}
        </div>
       }
    </div>
  )
}

export default Form
// function Form() {
//     const [name,setName] = useState('')
//     const saveName =(e)=>{
//         setName(e.target.value)
//         console.log(name)
//     }
//   return (
//     <div>
//        <label htmlFor="">Name : </label> 
//        <input type="text" onChange={saveName} value={name} />
//     </div>
//   )
// }

// export default Form