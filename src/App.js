/* eslint-disable */
// warning 메시지 안보이게 해줌

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let post = '부산 우동 맛집';
let [글제목,글제목변경] = useState(['남자코트 추천','파이썬 독학','부산 우동 맛집']);
let [따봉, 따봉변경] = useState(0);
let [modal, setModal] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
        } }>글수정</button>

      <div className="list">
        <h3>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> {따봉} </h3>
        <p>10월 6일 발행</p>
      </div>


      <div className="list">
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3 onClick={() =>{setModal(!modal)}}>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
      </div>
      {
        modal == 1 ? <Modal/> : null
      }
      <Naver/>
    </div>
  );
}


function Modal(){
  return(
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

function Naver(){
  return(
    <div>
      <button>
        <a href='naver.com'>네이버 바로가기</a>
      </button>
    </div>
  )
}



export default App;
