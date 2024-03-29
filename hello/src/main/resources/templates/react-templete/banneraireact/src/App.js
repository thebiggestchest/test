import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './login';
import Setting from './setting';
import Mypage from './mypage';
import Signup from './signup'
import Makebanner from './makebanner';



export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
              <Route path={"/login"} element={<Login />}></Route>
              <Route path={"/setting"} element={<Setting />}></Route>
              <Route path={"/mypage"} element={<Mypage />}></Route>
              <Route path={"/signup"} element={<Signup />}></Route>
              <Route path={"/makebanner"} element={<Makebanner />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

