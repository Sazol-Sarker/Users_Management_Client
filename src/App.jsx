
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [users,setUsers]=useState([])

useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res=>res.json())
  .then(data=>setUsers(data))
},[])
 return (
    <>
     
      <h1 className='font-semibold text-xl text-teal-500'>Users Data fetch using Express server app</h1>
      <h2 className='font-semibold text-xl text-teal-500'>All Useres: {users.length}</h2>
     
      {

      }

    </>
  )
}

export default App
