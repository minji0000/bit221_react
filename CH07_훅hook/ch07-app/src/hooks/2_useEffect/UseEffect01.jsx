import React, { useEffect } from 'react'
import { useState } from 'react';

/** 클래스 컴포넌트 생명주기 함수
 * useEffect( 콜백 함수, 의존성 배열[, , , ,] ); 
 * 
 * ??? [여기가 비어있으면] 딱 한 번 렌더링(mount 될 때) 되고 끝남
 * useEffect( ()=> {엑시우스..?},1 [의존성 변수, 변수2, ]);
 *                        
 */

 const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

// useEffect
let kiwis = [];


function UseEffect01() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    if(count === 0) kiwis =[];
    kiwis.push('🥝');

    document.title = '🍒' + count + 'update';
  }, [count])


  return (
    <div className='container' style={styles.container}>
 
    <span>{kiwis+'💨'+count}</span>
    <hr></hr>
    <p className='h3'>You clicked {count} times</p>
    <hr />

    <button className='btn btn-info' style={styles.btn}
      onClick={() => {
        setCount(count + 1);
      }}>

      <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
      <br />
      <span>Click Me</span>
    </button>

  </div>
  )
}

export default UseEffect01

