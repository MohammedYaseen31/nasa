import React, { useState } from 'react';
import rocketvideo from "../assets/videos/rocket.mp4";
import '../assets/styles/home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  let cardNavigate = useNavigate()
  let [bool, setBool] = useState(true)
  let videoClick = async() => {
    setBool(!bool)
    // console.log(bool);
    setTimeout(() => {
      cardNavigate(`/card`)
    }, 18000)
  }
  
  return (
    <>
      <div className="home">
        <video autoPlay loop muted className={bool ? 'novideo' : 'video'}>
          <source src={rocketvideo} type='video/mp4' />
        </video>
        <button onClick={videoClick} className={bool ? 'onButton' : 'noButton'}>
          Click for a Ride
        </button>
      </div>
    </>
  )
}

export default Home
