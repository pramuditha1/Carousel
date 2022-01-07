import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CarouselSlider(props) {
    const [imageData, setImageData] = useState([])
    
    const fetchProducts = () => {
        const response = axios.get(`localhost:3600/api/carousel/${props.slides}`)
        .then(
            setImageData(response.data)
        )
        .catch((err) => {
            <h2>{err}</h2>
        });
    }
    //fetch api data only on page load
    useEffect(fetchProducts(), [imageData])

    return (
        <div>
            {
                imageData.map(data => 
                    <>
                        {
                            console.log(data.image)
                        }
                    </>)
            }
        </div>
    )
}

export default CarouselSlider
