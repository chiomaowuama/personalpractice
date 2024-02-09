import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({children}) =>{
    const[ Theme, setTheme] = useState(' light')

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
