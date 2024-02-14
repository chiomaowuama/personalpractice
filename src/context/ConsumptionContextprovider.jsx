import ConsumptionContext from "./ConsumptionContext";
import React, { useState } from "react";
import Dogapi from "../Hook/Dogapi";

const ConsumptionContextProvider = ({children}) =>{
    return(
        <ConsumptionContext.Provider>
            {children}
        </ConsumptionContext.Provider>
    )

}
export default ConsumptionContextProvider