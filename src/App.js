/* eslint-disable */
// warning 메시지 안보이게 해줌

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let post = '부산 우동 맛집';
let [글제목,b] = useState(['남자코트 추천','파이썬 독학','부산 우동 맛집']);
let [따봉, 따봉변경] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p>10월 6일 발행</p>
      </div>


      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
