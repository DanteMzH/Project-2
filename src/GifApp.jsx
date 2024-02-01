import React from 'react'
import { useState } from 'react';
import './components/AddCategories.jsx'
import { AddCategories } from './components/AddCategories.jsx';
import { GifGrid } from './components/GifGrid.jsx';
import './assets/css/styles.css'




export const GifApp = () => {
  
  // state of listgif
  
  const [listCategories, setListCategories] = useState(['Goku']);

  
  return (
    <>
      <h1>List of Categories</h1>

      <AddCategories props = {setListCategories}  />

          {
          listCategories.map(categories =>(
            <GifGrid key={categories} propers = {categories}/>
          ))
          }            
    
    </>
  )
}
