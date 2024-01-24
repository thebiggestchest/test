import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useEffect, useState} from "react";
import axios from "axios";
import Login from './login';
import Setting from './setting';
import Mypage from './mypage';
import Signup from './signup'



export default function App() {
  const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get('/api/test')
            .then((res) => {
                setHello(res.data);
            })
    }, []);
  
  return (
    <div className="App">
      백엔드 데이터 : {hello}
     
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
}
