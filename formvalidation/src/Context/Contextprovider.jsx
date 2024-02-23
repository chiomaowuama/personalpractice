import { useState } from "react";
import Context from "./Context/Context.js";

const Contextprovider = ({children}) => {
    const [user, setUser] = useState
    return(
        <Contextprovider value={user}>
            {children}

        </Contextprovider>
    )

}
export default Contextprovider