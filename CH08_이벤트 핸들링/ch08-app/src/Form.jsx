import React from 'react'
import {useState} from 'react';

function Form() {
  const [password, setPassword] = useState('');
  const handleSubmit = (evt)=> {
    /** page refresh
     * 폼 안에서 입력값을 전송할 때 페이지가 다시 로딩 되는 걸 막기
     */

    evt.preventDefault();
    // 제출 후 값 초기화
    evt.value = setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name='password'
          value={password}
          onChange = {evt => setPassword(evt.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Form