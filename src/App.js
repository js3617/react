/* eslint-disable */
// warning 메시지 안보이게 해줌

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

let post = '부산 우동 맛집';
let [글제목,글제목변경] = useState(['남자코트 추천','파이썬 독학','부산 우동 맛집']);
let [따봉, 따봉변경] = useState([0,0,0]);
// let [따봉1, 따봉변경1] = useState(0);
// let [따봉2, 따봉변경2] = useState(0);
let [modal, setModal] = useState(false);
let [title,setTitle] = useState(1);
let [입력값, 입력값변경] = useState('');



  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
        } }>글수정</button> */}

      {/* <div className="list">
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
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4 onClick={ ()=> {setModal(true); setTitle(i);}}>{글제목[i]} 
              <span onClick={()=>{ 
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>👍</span> {따봉[i]} </h4>
              <p>11월 12일 발행</p>
              <button onClick={()=>{
                let de = [...글제목];
                de.splice(i,1);
                글제목변경(de)
              }}>삭제</button>
            </div>
          )
        })
      }

      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>

      <input onChange={(e)=>{ 입력값변경(e.target.value);}}/>
      <button onClick={()=> {
        let ap = [...글제목];
        ap.push(입력값);  
        글제목변경(ap);
        let ed = [...따봉];
        ed.push(0);
        따봉변경(ed)
        }}>추가</button>

      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}/> : null
      }
    </div>
  );
}


function Modal(props){
  return(
      <div className='modal'>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ ()=> { 
          props.글제목변경(['여자코트 추천', '강남스타일', '파이썬독학']) }}>
          글수정</button>
      </div>
  )
}

export default App;