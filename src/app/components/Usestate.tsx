"use client"

//hooks //Use State
import { useState } from "react"

export default function Home() {

const[ add,setAdd ] = useState(0)

//let num = 0;
const incrementHandler = () => {
    setAdd( add + 1)
}
    return(
        <div>
        <h1> {add} </h1>
        <button  onClick={incrementHandler}> Add</button>
        </div>
    )
}