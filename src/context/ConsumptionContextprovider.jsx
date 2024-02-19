import ConsumptionContext from "./ConsumptionContext";
import React, {  useState } from "react";
import Dogapi from "../Hook/Dogapi";
import DogpictureApi from "../Hook/DogpictureApi";


const ConsumptionContextProvider = ({children}) =>{
    const[Select, setSelect] = useState('eskimo')

    const Getoptions = Dogapi()
    const Options = Object.keys(Getoptions)
    console.log(Options)

    const Getpicture = () =>{
        const Dogpictures = DogpictureApi(Select)
        console.log( Dogpictures )
    }


    return(
        <ConsumptionContext.Provider value={{Select, Options,  Getpicture}}>
            {children}
        </ConsumptionContext.Provider>
    )

}
export default ConsumptionContextProvider