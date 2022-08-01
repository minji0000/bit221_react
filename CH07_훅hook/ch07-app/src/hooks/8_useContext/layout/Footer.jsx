import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const styles = {
  footer:{
    backgroundColor:'#eee',
    height:100,
    display:'flex',
    // flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',  
    color:'#111',  
 
  },
 
  contain:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent: 'center',    
  }
};


function Footer() {

  const {isDark, setIsDark} = useContext(ThemeContext);

  const setDark = ()=> {
    return {
      // 반드시 ! ! 기억 하세 요 ! ! 
      // 특정 항목(key)값만 update가 필요하다면,
      // 일단 쭉 펼친 후 특정 값만 수정해주면 덮어쓴다.
      // map에서 같은 key값을 넣으면 새로운 값으로 바뀜
      ...styles.footer, backgroundColor: '#333', color: '#eee'
    }
  }

  const toggle = ()=> {
    setIsDark(!isDark);
    document.querySelector('.btn').innerHTML = isDark ? 'Dark':'Light';
  }




  return (
    <>
      <footer style={isDark ? setDark() : styles.footer}>
        <div className='contain' style={styles.contain}>
          Currently v5.2.1 Code licensed BIT211, docs CC BY 3.0.
          <button className='btn btn-danger ml-5'
            onClick={toggle}
          >
            Dark
          </button>
        </div>
      </footer>
    </>
  )
}

export default Footer