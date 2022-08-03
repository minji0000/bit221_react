import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MyImg = styled.img`
  width: 50px;
  border-radius: 50%;
`

const Test = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos/")
      .then((res) => {
        setData(res.data)
        // console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios({
    //   method="get",
    //   url="https://jsonplaceholder.typicode.com/photos/"
    // });
  }, []);

  return (
    <>
      <div className="d-flex align-items-center mt-5">
        <img src="https://cdn.pixabay.com/photo/2017/08/25/18/48/watercolor-2681039__340.jpg" alt="" style={{ width: 100, height: 100, borderRadius: 100 }} />
        <div className="d-flex">
          <input type="text" className="form-control ms-3" />
          <button className="btn btn-danger ms-3">Search</button>
        </div>
      </div>

      <div className="container mt-3">
        <span style={{ color: '#999' }}>Total : {data.length} gun</span>
        <hr />
        <table className="table table-light" style={{ fontSize: '1rem' }}>
          <thead>
            <tr>
              <th scope="col">Album</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Url</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dummy, idx) => {
              return (
                <tr key={idx}>
                  <td>{dummy.albumId}</td>
                  <td>
                    {/* <a href={dummy.thumbnailUrl}>{dummy.id}</a> */}

                    <MyImg src={`${dummy.thumbnailUrl}`} alt="aa" />

                  </td>
                  <td>{dummy.title}</td>
                  <td><a href={dummy.url}>{dummy.url}</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Test;