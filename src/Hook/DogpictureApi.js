import { useState, useEffect } from "react"

function DogpictureApi() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${dogtype}/images`)
        .then((res) => res.json())
        .then((res) => setData(res.message))
        // console.log(res)
      
    }, [dogtype])
    // console.log(data)
    return data
    

}

export default DogpictureApi