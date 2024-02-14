// import { useState, useEffect } from "react";

// const Dogapi = (breedname) =>{
//     const [data, setData] = useState({});
//     useEffect(() => {
//       fetch(`https://dog.ceo/api/breed/${breedname}/images `)
//       .then((res) => res.json())
//       .then((res) => setData(res[breedname]))
//     }, [breedname])

//     console.log(data);
//     return data

// }
// export default Dogapi