import { useEffect, useState } from "react";


function Dogapi(dogtype){
    const [ Data, setData] = useState({})
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${dogtype}/images`)
        .then((res) => {
            const Data = res.json()
            console.log(Data)
            // res.json()
            return Data
        })
        .then((res) =>{
            console.log(res)
            setData(res.message)
        })
        console.log(Data);
    }, [dogtype])
  
      return Data
}
export default Dogapi