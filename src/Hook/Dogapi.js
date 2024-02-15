import { useEffect, useState } from "react"


function Dogapi(dogtype){
    const [Data, setData]  = useState()
   useEffect(() => {
        const response = fetch(`https://dog.ceo/api/breed/${dogtype}/images`)
        console.log(response)
        .then((res) => res.json())
        .then((res) => setData(res.message))
        console.log(Data)
    }, [dogtype])


}
export default Dogapi














// import { useEffect, useState } from "react";


// function Dogapi(dogtype){
    // const [ Data, setData] = useState([])
    // useEffect(() => {
        // const response = fetch(`https://dog.ceo/api/breed/${dogtype}/images`)
        // console.log(response)
        // .then((res) => res.json())
        // .then((res) => setData(res.message))
        // console.log(Data)
    // }, [dogtype])
    
    // console.log(Data);
    //   return Data
// }
// export default Dogapi

// .then((res) => {
//     const Data = res.json()
//     console.log(Data)
//    setData(Data)
//     return Data
// })
// .then((res) =>{
//     setData(res.message)
//     const rest = res
//     return rest
// })