import React, { useCallback } from 'react'
import Box from './Box'
import { useState } from 'react'

function UseCallback03() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

/* const createBoxStyle = ()=>{
    return {
      backgroundColor: 'plum',
      width: `${size}px`,
      height:  `${size}px`,
    }
  }
 여기와 아래의 차이를 알아야함
  */

  const createBoxStyle = useCallback(()=>{
    return {
      backgroundColor: 'plum',
      width: `${size}px`,
      height:  `${size}px`,
    }
  }, [size]);


  return (
    <div style={{background: isDark ? '#eee' : '#ee2'}}>
      <button className='btn btn-info mb-1'
        onClick={()=>{setIsDark(!isDark)}}
      >Change Thema</button>
      <input className='form-control' type={'number'} value={size}
        onChange = {(e)=>setSize(e.target.value)}
      />

      <br/>

      <Box createBoxStyle= {createBoxStyle}/>
    </div>
  )
}

export default UseCallback03