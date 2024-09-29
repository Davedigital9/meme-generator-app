import React from "react"
import memesData from "../memesData.jsx"

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url) 
    }

    return (
        <main>
            <div className="form">
                <div>
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </div>
                <button className="form--button" onClick={getMemeImage}>
                    <span>Get a new meme image 🖼</span>
                </button>
            </div>
            <img src={memeImage} className="meme--image"/>
        </main>
    )
}