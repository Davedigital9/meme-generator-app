import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/Trollface.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Web3Bridge React Project </h4>
        </header>
    )
}