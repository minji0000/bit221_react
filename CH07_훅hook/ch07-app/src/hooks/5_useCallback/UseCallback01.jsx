import React, { useCallback } from 'react'

/**
 * useCallback()
 * 
 * useMemo()
 * 값이 아닌 함수를 반환
 * 
 * 자바스크립트에서 함수는 객체의 한 종류이다. 
 */

function UseCallback01() {

  const memo = useCallback(()=>{}, []);

  return (
    <div>UseCallback01</div>
  )
}

export default UseCallback01