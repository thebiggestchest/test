import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';


// 함수형 컴포넌트인 Login을 정의합니다.
const Login = () => {
    const navigate = useNavigate ();

    const GoLogin = () => {
      navigate("/login");
    }
    const GoSignup = () => {
      navigate("/signup");
    }
    const GoSetting = () =>{
        navigate("/setting")
    }
  // 상태 훅을 사용하여 아이디와 비밀번호의 상태를 관리합니다.
    const [아이디, set아이디] = useState('');
    const [비밀번호, set비밀번호] = useState('');
    const 로그인하기 = () => {
        // 실제로는 여기에서 서버로 요청을 보내고 결과를 받아오게 됩니다.
        // 여기서는 간단하게 아이디가 'user'이고 비밀번호가 'password'일 때 로그인 성공으로 가정합니다.
        if (아이디 === 'user' && 비밀번호 === 'password') {
            alert('로그인 성공!');
            console.log("로그인 성공")
        } else {
            alert('로그인 실패. 다시 시도하세요.');
            console.log("로그인 실패")
        }
    };

  // JSX를 반환하여 화면을 구성합니다.
  return (
    <body>
    <header>
        <div class="banner-header">

            <h2 class="banner-title">MAKEBANNER</h2>

            <div class="charts-see-all">

                <a class="go-login" onClick={GoLogin}>
                    로그인
                </a>

                <a class="go-login" onClick={GoSignup}>
                    회원가입
                </a>

                <button class="go-start">
                    <a class="go-go" onClick={GoSetting}>
                        시작하기
                    </a>
                </button>

            </div>

        </div>
    </header>

    <section>
        <div class="container">
            <form class= "login">
                <h1 class= "login-title">로그인</h1>
                <label>아이디</label>
                <input
                        name="id"
                        type="text"
                        placeholder="Email 또는 전화번호"
                />
                <label>비밀번호</label>
                <input
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                />
                <div class = "login-forgot">
                    <a class="login-forgot-link" href="#">비밀번호를 잊으셨나요?</a>
                </div>
                <button class="login-but" onclick="login()">로그인</button>
                <div class= "login-signup">
                    회원이 아니신가요?
                    <a class="login-signup-link" href="#">가입하기</a>
                </div>
            </form>
        </div>
    </section>
</body>
  );
};
export default Login;