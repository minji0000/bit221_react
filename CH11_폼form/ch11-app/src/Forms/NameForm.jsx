import React from 'react'
import {useState} from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    alert('입력한 이름: ' + value);
    e.preventDefault();   
  }
  /**
   * 입력값 변경 시 호출(변경된 value 저장)
   */

  const handleChange = (e)=> {
    setValue(e.target.value);
    if(e.target.value.length > 8) {
      alert("넘어");
      setValue('');
      return;
    }
  }


  return (
    <>
      <form>
        <label>
          <h4>Name: </h4>
          <input className='form-control' type='text'
            name='name'
            id='name'
            value={value}
            placeholder='input your name'
            onChange={handleChange}
          />
        </label>
        <button className='btn btn-success ms-1' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default NameForm