import React from 'react'
import {useState} from 'react'

function UseReducer02() {
  const [money, setMoney] = useState(1000000);
  

  return (
    <div className='container'>
      <h6>useReducer 은행에 오신 것을 환영합니다.</h6>

      <h2>잔고: 1000000 </h2>
      <div style={{display: 'flex'}}>
        <input type={'number'}  
        step='1000'
        className='mb-2'/>
        <button className='btn btn-info ml-1'>예금</button>
        <button className='btn btn-primary ml-1'>출금</button>
      </div>
    </div>
  )
}

export default UseReducer02