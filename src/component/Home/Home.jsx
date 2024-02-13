import React, { useState } from 'react'
import Theme from '../Themes/Theme'
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
     
  }
  return (
    <div>
      
      <div>
        <form onSubmit={Getname} className='border-2 border-green-900 dark:bg-green-900'>
          <div className='border-2 border-yellow-900 block '>
            <label htmlFor="">FirstName</label>
            <input type="text" 
            placeholder='Fristname'
            className='border-2 border-green-900'
            onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='block'>
            <label htmlFor="">SecondName</label>
            <input type="text" 
            placeholder='Fristname'
            className='border-2 border-green-900'
            onChange={(e) => setSecondName(e.target.value)}
            />
          </div>
          
          <button  className='border-2 border-black' type="submit">Get FullName</button>
        </form>
        <p> fullname:{Fullname} </p>
      </div>      
    </div>
  )
}

export default Home