import React, { useState } from 'react'

function UseState02() {

  const [input, setInput] = useState('');
  const [names, setNames] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  const uploadHandler = () =>{
    setNames((preState)=>{
      console.log(preState);
            // ... = 펼친 배열 (원래 있던 게 들어감)
      return [...preState, input + '\n']
    });
  }

  console.log('UseState02 Called...')

  return (
    <div className='container'>
      <div style={{display:'flex'}}>
        <input type='text' className='form-control' placeholder='이름을 입력해주세요' style={{width: '500px'}}
          onChange = {inputChangeHandler}
        />
        <button className='btn btn-primary'
          onClick={uploadHandler}
        >업로드</button>
      </div>
      <textarea className='form-control mt-1'
        defaultValue={names.toString().split(',').join('')}
      rows={10} />
    </div>
  )
}

export default UseState02