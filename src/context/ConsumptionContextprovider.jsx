import ConsumptionContext from "./ConsumptionContext";
import React, {  useState } from "react";
import Dogapi from "../Hook/Dogapi";


const ConsumptionContextProvider = ({children}) =>{
    const[Select, setSelect] = useState('eskimo')

    const Getoptions = Dogapi()
    const Options = Object.keys(Getoptions)
    console.log(Options)


    return(
        <ConsumptionContext.Provider value={{Select, Options}}>
            {children}
        </ConsumptionContext.Provider>
    )

}
export default ConsumptionContextProvider