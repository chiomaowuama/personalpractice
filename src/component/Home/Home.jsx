import React, { useState } from 'react'
import  ThemeContext  from '../../context/ThemeContext'
import { useContext } from 'react'


function Home() {
  const { Theme, darktheme, lighttheme} = useContext( ThemeContext)
  const [FirstName, setFirstName]= useState('')
  const [SecondName, setSecondName]= useState('')
  const [Fullname, setFullname ]= useState(' ')

  // console.log(FirstName)
  // console.log(SecondName)
  // console.log(Fullname)

  const Getname = (e) =>{
    e.preventDefault()
     setFullname(FirstName +" " +  SecondName)
     console.log(Fullname);
  }
  return (
    <div>
      
      <div>
        <form onSubmit={Getname} className=' border-2 border-blue-900'>
          
            <label htmlFor="" >FirstName</label>
            <input
             type="text" 
            placeholder='Fristname'
            className=''
            onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="">SecondName</label>
            <input type="text" 
            placeholder='Fristname'
            className=''
            onChange={(e) => setSecondName(e.target.value)}
            />
        
          
          <button  className='border-2 border-black' type="submit">Get FullName</button>
        </form>
        <p> fullname: {Fullname} </p>
      </div>      
    </div>
  )
}

export default Home