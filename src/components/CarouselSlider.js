import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SliderContect from './SliderContect';

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
        <div style={ height = '100%', width = '100%' }>
            {
                imageData.map(data => <SliderContect imageObject={data}/>)
            }
        </div>
    )
}

export default CarouselSlider
