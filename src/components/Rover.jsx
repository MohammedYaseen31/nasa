import React from 'react'
import roverpic from '../assets/images/roverpic.jpg'
import '../assets/styles/rover.css'
import { useNavigate } from 'react-router-dom'
const Rover = () => {
    let backNaviagte=useNavigate()
    let logout=useNavigate()
    let rovercard=useNavigate()
    let handleBack=()=>{
        backNaviagte(`/card`)
    }
    let handleLogout=()=>{
        logout(`/`)
    }
    let handleRover=()=>{
        rovercard(`/rovercards`)
    }
  return (
    <>
        <div className="rover">
            <div className="container">
                <h1>
                    ROVER
                </h1>
                <div className="text">
                   A rover is a robotic vehicle designed primarily for space exploration, enabling scientists to study the surface of planets, moons, and other celestial bodies. Unlike stationary landers, rovers can move across varied terrains, allowing them to collect more comprehensive data from multiple locations. These machines are equipped with high-tech instruments such as cameras, spectrometers, drills, and environmental sensors to analyze soil, rocks, atmosphere, and even search for signs of past or present life. Most rovers are remotely operated from Earth, although many are semi-autonomous, using onboard systems to navigate obstacles and make decisions in real time. Rovers are typically powered by solar panels or radioisotope thermoelectric generators (RTGs), ensuring they can function in extreme environments with limited sunlight. Notable rovers like NASA's Curiosity and Perseverance have significantly expanded our understanding of Mars, revealing details about its climate, geology, and potential habitability.
                </div>
                <div className="btn">
                        <button onClick={handleRover}>Explore Rover</button>
                        <button onClick={handleBack}> Go back</button>
                        <button onClick={handleLogout}>Logout </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Rover
