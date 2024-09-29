import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
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
                <button className="form--button">
                    <span>Get a new meme image 🖼</span>
                </button>
            </form>
        </main>
    )
}