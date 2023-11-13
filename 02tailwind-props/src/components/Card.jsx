import React from "react"
import { useState } from 'react'

export default function Card({n="One", num=1}) {
    let [state, setState] = useState("text-red-300")
    return (<>
        <div className="border border-black rounded p-3 m-5 max-w-sm">
            <h3>{num}.Card {n}</h3>
            <p className={state}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus consequuntur, quis nemo sed corrupti magni enim ipsum praesentium eveniet assumenda, a molestias amet?</p>
            <button className="bg-gray-50 p-2 mt-2 rounded border" onClick={()=> {setState(state="text-green-300")}}>Change State</button>
        </div>
    </>)
}