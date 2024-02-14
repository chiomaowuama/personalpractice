import { useState } from "react";

const Dogapi = () =>{
    const responds = fetch("https://dog.ceo/api/breeds/list/all ")
    return responds

}
export default Dogapi