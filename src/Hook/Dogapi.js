import { useEffect, useState } from "react";


function Dogapi(dogtype){
    const [ Data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${dogtype}/images`)
        .then((res) => {
            const Data = res.json()
            // console.log(Data)
           setData(Data)
            return Data
        })
        .then((res) =>{
            // console.log(res)
            setData(res.message)
            const rest = res
            return rest
        })
    }, [dogtype])
    
    // console.log(Data);
      return Data
}
export default Dogapi