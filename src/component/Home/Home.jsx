import React, { useContext} from 'react'
import Theme from '../Themes/Theme'
import  ThemeContext  from '../../context/ThemeContext'
import { useContext } from 'react'


function Home() {
  const { Theme, darktheme, lighttheme} = useContext( ThemeContext)
  return (
    <div>
      <h1>hello</h1>
      
    </div>
  )
}

export default Home