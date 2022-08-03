import React from 'react'
import styled from 'styled-components'

/** styled-components
 * : CSS 문법을 그대로 사용
 * 결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈소스 라이브러리
 * 
 */

const Wrapper = styled.div`
  padding: 1em;
  background-color: yellowgreen;
  border-radius: 50%;
`;

const Btn = styled.button`
  background: #4c00ff;
  background-color: #4c00ff;
  color: #ffff;
  padding: 3px;
  border-radius: 10px;
  border-color: yellow;
`;

const SmartButton = styled.button`
  color: ${props => props.dark ? 'white' : 'dark'};
  background: ${props => props.dark? 'black' : 'white' };
  border: 1px solid crimson;
  padding: 3px;
`;

function MainPage() {
  return (
    <Wrapper>
      <div>Main Page</div>
      <SmartButton dark>Black Button</SmartButton>
    </Wrapper>
  )
}

export default MainPage