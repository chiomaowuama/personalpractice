import ConsumptionContext from "./ConsumptionContext";
import React, {  useState } from "react";
import Dogapi from "../Hook/Dogapi";


const ConsumptionContextProvider = ({children}) =>{
    const[Select, setSelect] = useState('eskimo')

    const Getoptions = Dogapi(Select)


    return(
        <ConsumptionContext.Provider value={{Select}}>
            {children}
        </ConsumptionContext.Provider>
    )

}
export default ConsumptionContextProvider