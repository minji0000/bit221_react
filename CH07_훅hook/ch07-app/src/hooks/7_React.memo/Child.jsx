import React, { memo } from 'react'
/** [React.memo 최적화]
 * 렌더링이 되어야 할 상황에 놓일때마다
 * props check 를 통해서 자신이 받는 props에
 * 변화가 있는지 없는지 확인하여
 * 있다면 렌더렁, 없다면 기존 결과를 재사용
 */

function Child({name, age}) {

  console.log('자식 컴포넌트 렌더링...')

  return (
    <div className='alter alert-success'>
      <h5>
        <i className="fa-solid fa-children"></i>
        <div className='d-flex flex-column'>
          <span>name : {name}</span>
          <span>age : {age}</span>
        </div>
      </h5>
    </div>
  )
}

export default memo(Child);
// 최적화(렌더링 전에 Props Check)된 컴포넌트 반환