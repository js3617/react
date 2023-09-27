import logo from './logo.svg';
import './App.css';

function App() {

let post = '부산 우동 맛집'; //서버에서 가져온 데이터라고 생각하자


  return (
    <div className="App">
      <div className="black-nav">
        <p>클래스 명은 무조건 ClassName로 선언해야한다</p>
        <h3 style={{color : 'red'}}>스타일선언도 무조건 이름:값 을 사용하여 작성한다</h3>
      </div>
      <h3>{ post } 변수명을 사용하고싶을때는 "중괄호 변수명 중괄호"방식으로 사용해야한다</h3>
    </div>
  );
}

export default App;
