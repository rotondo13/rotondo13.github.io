import { useState } from "react";

export default function Home () {
    
  const [toggle, setToggle] = useState("");
  const expand = toggle ? "width1" : "";
    return(
        <>
        <h1>HOME</h1>
        </>
    )
}