import React, { useEffect } from 'react'
import {useState} from 'react'
// import 까먹지마 !!!!!!!!

function UseEffect02() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('nickname');

  const updateInput = (e) => {
    setName(e.target.value)
  }

  const updateCount = ()=>{
    setCount(count + 1);
  }

  // 여기가 핵심
  // 렌더링마다 매번 사이드 이펙트 실행
  // useEffect( () => {console.log('돼따')});
  
  // 마운팅 && count가 바뀔 때마다 실행
  /* useEffect(()=>{
    console.log('count랑 name 변경될 때')
  }, [count, name]); */

  // 최초 마운팅 될 때만
  useEffect(()=>{
    console.log('count랑 name 변경될 때')
  }, []);

  return (
    
    <div className='container'>
      <p>COUNT: {count}</p>
      <button className = 'btn btn-primary'
        onClick={updateCount}
      >Update</button>
      <div>
        <input type='text' onChange={updateInput}/>
      </div>
    </div>
  )
}

export default UseEffect02