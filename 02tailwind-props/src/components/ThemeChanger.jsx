import React from "react"
import { useState } from 'react'

export default function ThemeChanger() {
    const [theme, setTheme] = useState({bg: "white", txt: "black"});
    return (<>
    <div className="border m-6 text-center py-10 duration-75" style={{backgroundColor : theme.bg}}>
        <h4 style={{color : theme.txt}}>Theme</h4>
    </div>
    <div className="m-6 flex gap-3">
        <span className="font-semibold">Set Theme:</span>
        <button onClick={() => setTheme({bg: "black", txt: "white"})}>Dark</button>
        <button onClick={() => setTheme({bg: "white", txt: "black"})}>Light</button>
        <button onClick={() => setTheme({bg: "gray", txt: "white"})}>Grey</button>
    </div>
    </>)
}