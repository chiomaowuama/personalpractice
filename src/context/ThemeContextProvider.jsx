import React, { useState, useEffect } from "react";
import ThemeContext  from "./ThemeContext";


const ThemeContextProvider = ({children}) =>{
    const[ Theme, setTheme] = useState('light')

    const darktheme = () => {
        setTheme('dark')
    }
    
    const  lighttheme = () => {
        setTheme('light')
      }
    
      useEffect(() => {
        document.querySelector('html').classList.remove('dark', "light")
        document.querySelector('html').classList.add(Theme)
      }, [Theme])
    
      return (
        <ThemeContext.Provider value={{Theme, darktheme, lighttheme}}>
            {children}
        </ThemeContext.Provider>
    )

}
export default ThemeContextProvider
