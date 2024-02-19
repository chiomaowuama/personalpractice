import { useState, useEffect } from "react"

function DogpictureApi(Select) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${Select}/images`)
        .then((res) => res.json())
        .then((res) => setData(res.message))
        // console.log(res)
      
    }, [Select])
    // console.log(data)
    return data
    

}

export default DogpictureApi