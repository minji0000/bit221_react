import React from 'react'
import { useState } from 'react'
import Child from './Child'

function Parents() {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incresementParentAge = ()=>{
    setParentAge(parentAge + 1);
  }
  const incresementChildAge = ()=>{
    setChildAge(childAge + 1);
  }

  console.log("부모 컴포넌트 렌더링...")

  return (
    <div className='container border border'>
      <div className='alert alert-info'>
        <h5>
          <i className="fa-solid fa-person-breastfeeding"></i>
          <span>age : {parentAge}</span>
        </h5>
      </div>

      <div className='mb-3 d-flex justify-content-center'>
        <button className='btn btn-secondary mr-2'
          onClick={incresementParentAge}
        >부모나이 증가 +</button>
        <button className='btn btn-secondary'
          onClick={incresementChildAge}
        >자식나이 증가 +</button>
      </div>

      <hr/>
      <Child name={'우영우'} age={childAge}/>
    </div>
  )
}

export default Parents