import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../assets/styles/rovercards.css'

const RoverCards = () => {
    let [nasa, setNasa] = useState([])
    useEffect(() => {
        let fetchApi = async () => {
            let ApiData = await axios.get(`http://localhost:4000/photos`)
            // console.log(ApiData);
            setNasa(ApiData.data)
        }
        fetchApi()
    }, [nasa])
    // console.log(nasa);

    return (
        <>
            <div className="rovercards">
                <div className="heading">
                    <h1>Rover Images</h1>
                </div>
                <div className="container">
                    {
                        nasa.map((elem) => {
                            let { id,camera,img_src,earth_date,rover } = elem
                            return(
                                <>
                                    <div className="cards">
                                        <div className="image">
                                            <img src={img_src} alt="" />
                                        </div>
                                        <div className="id">
                                            {id}
                                        </div>
                                        <div className="name">
                                            Camera Name : {camera.name}
                                        </div>
                                        <div className="fullname">
                                           Full Name : {camera.full_name}
                                        </div>
                                        <div className="earthdate">
                                           Earth Date : {earth_date}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default RoverCards
