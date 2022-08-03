import logo from './logo.svg';
import './App.css';
import MainPage from './StyledComponents/MainPage';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';

/** JS에서 비동기 HTTP 통신
 * ajax, fetch, axios
 * 
 * REST API 
 * (Representation State Transfer)
 * 두 컴퓨터 시스템이 인터넷을 통해 
 * 정보를 교환하기 위해 사용하는 인터페이스.
 * HTTP Method : GET, POST, PUT(수정), DELETE
 * 
 * 외부 라이브러리 사용 방식
 * 1. CDN: 데이터 링크를 통해 가져옴 cdnjs.com
 * 2. 설치: 직접 라이브러리를 가져와서 설치함(npm 방식) npmjs.com
 */

const MyImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

function App() {
  const [posts, setPosts] = useState([]);
  // 마운트 될 때 한 번 시행해주는 기능
  /*  useEffect(()=>{
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then((res) =>{
      setPosts(res.data)
    })}
    , []);
 */

  /* useEffect(()=>{
    axios({
      // return 시 자기 자신의 참조변수 (this)가 리턴됨
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/posts',
    }).then().catch()
  }, []); */

  // axios.get('https://jsonplaceholder.typicode.com/posts')
  // .then((res)=>{setPosts(res.data)})

  useEffect(()=>{
    axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos'
    })
    .then((res)=> {
      setPosts(res.data)
      console.log("Hello~!!~~!~");
    })
    .catch((e)=>{console.log(e)})
  }, []);

  return (

    <div className="App">
      <header className="App-header">
        <div className='d-flex' style={{ alignItems: 'center' }}>
          <img src='https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg' alt=''
            style={{ width: 200, height: 200, borderRadius: 100 }} />
          <div className='d-flex'>
            <input className='form-control ml-5' />
            <button className='btn btn-outline-primary ml-2'>Search</button>
          </div>
        </div>

        <div className='container'>
          <span style={{ color: '#999' }} > {`Total ${posts.length}`} </span>
          <hr />
          <table className='table text-light' style={{ fontSize: '1rem' }}>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>ID</th>
                <th scope='col'>TITLE</th>
                <th scope='col'>BODY</th>
              </tr>
              </thead>
              <tbody>
                {
                  posts.map((post, idx) => {
                    return (
                      // 맵 돌릴 때 식별할 수 있도록 꼭 Key 주기
                      <tr key={idx}>
                        <th scope='row'>{post.userId}</th>
                        <td>{post.id}</td>
                        <td><img src={post.thumbnailUrl}/></td>
                        <td>{post.body}</td>
                      </tr>
                    );
                  })
                }

              </tbody>
            
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
