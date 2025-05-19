import React from 'react'
import roverimg from '../assets/images/rover1.png'
import marsimg from '../assets/images/mars2.png'
import '../assets/styles/card.css'
import { useNavigate } from 'react-router-dom'
const Card = () => {
    let roverNavigate = useNavigate()
    let marsNavigate = useNavigate()
    let rideNavigate=useNavigate()
    let handleRover = () => {
        roverNavigate(`/rover`)
    }
    let handleMars = () => {
        marsNavigate(`/mars`)
    }
    let handleRide=()=>{
        rideNavigate(`/home`)
    }
    return (
        <>
            <div className="card">
                <div className="container">
                    <div className="cards" onClick={handleRover}>
                        <div className="imgage">
                            <img src={roverimg} alt="" />
                        </div>
                        <div className="name">
                            Rover
                        </div>
                    </div>
                    <div className="cards" onClick={handleMars}>
                        <div className="imgage">
                            <img src={marsimg} alt="" />
                        </div>
                        <div className="name">
                            Mars
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleRide}>Ride Again?</button>
                </div>
            </div>
        </>
    )
}

export default Card
