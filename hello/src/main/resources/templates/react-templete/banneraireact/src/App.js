import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Setting from './setting';
import Mypage from './mypage';
import Signup from './signup'



export default function App() {
  
  return (
    <div className="App">
     
    <BrowserRouter>
          <Routes>
              <Route path={"/user/login"} element={<Login />}></Route>
              <Route path={"/user/setting"} element={<Setting />}></Route>
              <Route path={"/user/mypage"} element={<Mypage />}></Route>
              <Route path={"/user/signup"} element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}
