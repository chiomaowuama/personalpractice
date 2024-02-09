import React from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = theme.Provider

export default function usetheme(){
    return(useContext(theme))
}