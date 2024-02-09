import React, { useContext } from "react";
import { createContext } from "react";

export const theme = createContext({
    theme:"light",
    darktheme: () => {},
    Lighttheme: () => {},
})
export const themeProvider = theme.Provider

export default function usetheme(){
    return(useContext(theme))
}