import ConsumptionContext from "./ConsumptionContext";
import React, {  useCallback, useEffect, useState } from "react";
import Dogapi from "../Hook/Dogapi";
import useDogpictureApi from "../Hook/DogpictureApi";


const ConsumptionContextProvider = ({children}) =>{
    const[Select, setSelect] = useState()
    // const[doglists, setDoglists] = useState({})

    const Getoptions = Dogapi()
    const Options = Object.keys(Getoptions)
    // this up part is for getting the totaol list of dogs that were put in the select

    const Dogpictures = useDogpictureApi(Select)  
    const Fewpic = Dogpictures.slice(0, 6)
    //  useEffect(()=>{
    //     const dogfew = Object.assign({}, Fewpic);
    //     setDoglists(Fewpic)
    //     console.log(dogfew)
    //  })
 
    // const doglist = (doglists) => {
    //     setDoglists(Fewpic)
    //     console.log(doglists)
    // }
 
    // console.log(Fewpic )
    // this upside helps us use the custom hook
    const Getpicture = useCallback((Select) => {
        // console.log(Select)
        setSelect(Select)
        // this helps us set the select into the one up here so we can use it in the custom hook
        
    }, [Select])
    // tot process is to use the new variable created to  as a container to slice the api resondse on picures, then export the variable then use loop to display it 


    return(
        <ConsumptionContext.Provider value={{Select, Options, Fewpic, Getpicture}}>
            {children}
        </ConsumptionContext.Provider>
    )

}
export default ConsumptionContextProvider