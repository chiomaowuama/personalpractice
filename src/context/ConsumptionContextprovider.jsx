import ConsumptionContext from "./ConsumptionContext";
import React, { useEffect, useState } from "react";
import Dogapi from "../Hook/Dogapi";


const ConsumptionContextProvider = ({children}) =>{
    const[Select, setSelect] = useState('eskimo')

    const Getoptions = Dogapi(Select).
    console.log(Getoptions)
    // console.log("about", Getoptions)
     
    

    return(
        <ConsumptionContext.Provider value={{Select}}>
            {children}
        </ConsumptionContext.Provider>
    )

}
export default ConsumptionContextProvider