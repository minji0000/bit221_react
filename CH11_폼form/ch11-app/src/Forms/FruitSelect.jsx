import React from 'react'
import {useState} from 'react';


function FruitSelect() {
  const [value, setValue] = useState('');

  const handleChange = (e)=> {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    alert('입력한 음식: ' + value);
    e.preventDefault();   
  }

  return (
    <form onSubmit={handleSubmit}>
      <laber>
        <h5>음식을 선택하세요</h5>
        <select className='form-select' value={value} onChange={handleChange}>
          <option>Open this select manu</option>
          <option value="cherry">🍒</option>
          <option value="bread">🍞</option>
          <option value="rice">🍙</option>
          <option value="candy">🍭</option>
          <option value="cake">🎂</option>
        </select>
      </laber>
      <button className='btn btn-success ms-1' type='submit'>Submit</button>
    </form>
  )
}

export default FruitSelect