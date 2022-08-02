import React from 'react'
import {useState} from 'react';

function FileInput() {
  const [imgSrc, setImgSrc] = useState('');

  const handleImageUpload = (e)=> {
    console.log(e.target.files[0]);
    setImgSrc(URL.createObjectURL(e.target.files[0]))
    console.log(imgSrc);
  }
  return (
    <>
      <div className='input-group mb-3'>
        <input type='file' accept='image/*'
        className='form-control'
        id='inputFile'
        onChange={handleImageUpload}
        />
        <label className='input-group-text'>
          Upload
        </label>
      </div>
      <div className='preview'>
        {
          imgSrc && <img className='w-25' src={imgSrc} alt ='마이멜로디' />
        }
      </div>
    </>
  )
}

export default FileInput