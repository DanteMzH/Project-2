import React, { useState } from 'react'

export const AddCategories = ({props}) => {

const [valueinput, setValueInput] = useState('');


const handleinput = (e) =>{

    setValueInput(e.target.value);
}

const handleSubmit = (e) =>{
    e.preventDefault();
    props( cate => [valueinput,...cate])
}

  return (
    <>
    <form onSubmit={handleSubmit}>

        <input
            type='text'
            placeholder='Search Gif'
            value={valueinput}
            onChange={handleinput}
            
            />
    
    </form>
    
    </>
  )
}
