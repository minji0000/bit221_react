import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState01 from './hooks/1_useState/UseState01';
import Home from './hooks/8_useContext/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Home></Home>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
