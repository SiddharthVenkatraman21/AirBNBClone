import React from "react"
import logo from '../../public/images/photo-grid.png'

export default function Hero() {
    return (
        <div>
            <section className="hero">
            <img src={logo} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one of a kind hosts - all without leaving home!</p>
        </section>
        </div>
    )
}