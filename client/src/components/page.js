import React, { useContext } from "react";
import {AuthContext} from "../context/AuthContext"

const Page = () => {
    const {user, setUser} = useContext(AuthContext);
    console.log("Loginzzzzzz", user);
    return  <div>
        <h1>page</h1>
        <div> {user}</div>
        <button onClick={() => setUser("romanov")}>change value </button>
        </div>
}
export default Page;