import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import Main from '../pages/Main';
import Java from '../pages/Java';
import JavaScript from '../pages/JavaScript';
import Reacts from '../pages/Reacts';
import Springboot from '../pages/Springboot';

const styles = {
  h5: {
    marginTop: 100,
  },
  main:{
    height:750,
    color:'gray',
    backgroundColor: 'white',
  }
};

function Content() {

  const {isDark} = useContext(ThemeContext);
  const setDark = ()=>  {
    return {
      ...styles.main, backgroundColor: '#222', color: '#eee'
    }
  }

  return (
    <main style={isDark ? setDark(): styles.main}>
      <div className='container text-center'>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='js' element={<JavaScript/>} />
            <Route path='react' element={<Reacts/>} />
            <Route path='java' element={<Java/>} />
            <Route path='sb' element={<Springboot/>} />
        </Routes>


      </div>
    </main>
  )
}

export default Content