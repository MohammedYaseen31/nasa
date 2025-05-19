import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/styles/mars.css'

const Mars = () => {
    
    let backNaviagte=useNavigate()
    let logout=useNavigate()
    let handleBack=()=>{
        backNaviagte(`/card`)
    }
    let handleLogout=()=>{
        logout(`/`)
    }
  return (
   <>
        <div className="mars">
            <div className="container">
                <h1>
                    MARS
                </h1>
                <div className="text">
                   Mars, often called the "Red Planet," is the fourth planet from the Sun in our solar system and has long fascinated scientists and astronomers. Its reddish appearance, caused by iron oxide (rust) on its surface, makes it easily visible from Earth. Mars is roughly half the size of Earth and has a thin atmosphere composed mostly of carbon dioxide. Despite its dry and barren landscape today, evidence suggests that liquid water once flowed on its surface in the form of rivers, lakes, and possibly even oceans. The planet experiences seasons, polar ice caps, and dust storms, some of which can cover the entire planet. Mars has two small moons, Phobos and Deimos. Due to its proximity and potential to support life, Mars is a primary target for exploration. Robotic missions have studied its geology, climate, and potential habitability, while future manned missions aim to explore it even more closely.
                </div>
                <div className="btn">
                        <button onClick={handleBack}> Go back</button>
                        <button onClick={handleLogout}>Logout </button>
                </div>
            </div>
        </div>
   </>
  )
}

export default Mars
