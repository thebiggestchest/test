import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from "react";
import React from 'react';
import ReactDOM  from 'react';
import axios from "axios";
import Login from './login';
import Setting from './setting';
import Mypage from './mypage';
import Signup from './signup'



export default function App() {
  // const [hello, setHello] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:8080')
  //       .then(response => {
  //           console.log(response.data); // 성공한 경우 서버 응답을 콘솔에 출력
  //       })
  //       .catch(error => {
  //           console.error(error); // 오류가 발생한 경우 오류를 콘솔에 출력
  //       });
  // }, []);
  
  return (
    <div className="App">
      {/* 백엔드 데이터 : {hello} */}
     
    <BrowserRouter>
          <Routes>
              <Route path={"/login"} element={<Login />}></Route>
              <Route path={"/setting"} element={<Setting />}></Route>
              <Route path={"/mypage"} element={<Mypage />}></Route>
              <Route path={"/signup"} element={<Signup />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};
// ReactDOM.render(<App />, document.getElementById('root'));
