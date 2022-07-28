import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react';

const hardCalcalate = (number) => {
  let total = 0;
  // cpu 부하주기
  for (let i = 0; i<99999999; i++) {
    total += i;
  }
  console.log('복잡한 계산 ! ! !')
  return number + total;
}

const easyCalurate = (number)=>{
  console.log('간단한 계산 !!')
  return number + 1;
}

function UseMemo02() {
  
  const [hardNumber, setHardNumber] = useState(0)
  const [easyNumber, setEasyNumber] = useState(0);

  // const hard = hardCalcalate(hardNumber);
  const hard = useMemo(()=>{
    return hardCalcalate(hardNumber);
  }, []); 

  const easy = easyCalurate(easyNumber);


  return (
    <div className='container'>

    <div style={{border:'1px solid green', padding:'20px'}}>
        <h5 style={{color:'#999'}}>Hard working</h5>
        <input                      //타입이 number면 int로 파싱해주어야함
          className='form-control' type='number'
          value={hardNumber}
          onChange={(e)=>setHardNumber(parseInt(e.target.value))}
        />
        <hr/>
        <span> ∫∛ ∝^ = {hard}</span>
      </div>

      <div style={{border:'1px solid green', padding:'20px'}}>
        <h5 style={{color:'#999'}}>Hard working</h5>
        <input                      //타입이 number면 int로 파싱해주어야함
          className='form-control' type='number'
          value={easyNumber}
          onChange={(e)=>setEasyNumber(parseInt(e.target.value))}
        />
        <hr/>
        <span> 1 + INPUT = {easy}</span>
      </div>

    </div>
      
  )
}

export default UseMemo02