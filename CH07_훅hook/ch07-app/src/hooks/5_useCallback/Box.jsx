import React, { useEffect, useState } from 'react'



function Box(props) {
  const [style, setStyle] = useState({}); // 빈 오브젝트로 초기화

  useEffect(()=> {
    console.log('Box Sizing.')
    setStyle(props.createBoxStyle());
  }, [props.createBoxStyle]);
  


  return (
    <div style={style}>

    </div>
  )
}

export default Box