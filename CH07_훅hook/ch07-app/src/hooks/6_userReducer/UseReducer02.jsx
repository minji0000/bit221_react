import React from 'react'
import {useState, useReducer} from 'react'

const ACTION_TYPES = {
  DEPOSIT : 'despsit',
  WITHDRAW: 'withdraw',
}


//           (account 상태값, 요구내용)
// state = 현재 상태, action = 요청내용
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case '예금':
      return state + action.payload;
    
    case '출금':
      return state - action.payload;

    default: 
      return state;
  }
  
}

function UseReducer02() {
  const [money, setMoney] = useState(0);
  const [account, dispatch] = useReducer(reducer, 0); //[state, dispatch]
  
  return (
    <div className='container'>
      <h6>useReducer 은행에 오신 것을 환영합니다.</h6>

      <h2>잔액: {account}원 </h2>
      <div style={{display: 'flex'}}>
        <input type={'number'} className='mb-2'  
        value={money}
        step='1000'
        onChange={(e)=>{setMoney(parseInt(e.target.value))}}
        />
        <button className='btn btn-info ml-1'       
          onClick={()=>{dispatch({type: ACTION_TYPES.DEPOSIT, payload: money})}}
        >예금</button>
        <button className='btn btn-primary ml-1'
          value={money}
          step='1000'
          onClick={()=>{dispatch({type: ACTION_TYPES.WITHDRAW, payload: money})}}
        >
          출금</button>
      </div>
    </div>
  )
}

export default UseReducer02