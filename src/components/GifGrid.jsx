import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({propers}) => {


const [images, setImages] = useState([])

  const getImages = async() =>{
    const newImages = await getGifs(propers);
    setImages(newImages);
  }

useEffect(() => {

  getImages();

}, [])


  return (
    <div>

      <h1>{propers}</h1>

      <div className="card-grid">
          {
            images.map((image) =>(
              <GifItem  
              key={image.id}
              {...image}
              />
            ))
          }

      </div>
    </div>
  )
}
