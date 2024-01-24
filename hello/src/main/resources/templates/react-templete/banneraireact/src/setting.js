import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './setting.css';


// 함수형 컴포넌트인 Login을 정의합니다.
const Makebanner = () => {
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
    const handleLogin = () => {
      // 여기에 로그인 로직을 처리하세요
      console.log('로그인 로직이 여기에 들어가야 합니다');
    };
  
    const handleRecommendation = () => {
      // 여기에 추천 로직을 처리하세요
      console.log('추천 로직이 여기에 들어가야 합니다');
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
      <h1 class= "login-title">배너 제작 설정</h1>
      <label class="la-t">배너 주제</label>
      <input class="in-t"
              name="subject"
              type="text"
              placeholder="배너 주제를 입력하세요."
      />
      <label class="la-t">배너 크기</label>
      <input class="in-t"
              name="size"
              type="text"
              placeholder="배너 크기를 입력해주세요."
      />

      <label class="la-t">배너 문구</label>

      <div class="check_wrap">
        <input type="checkbox" id="check_btn1"/>
        <label for="check_btn1"><span>문구 직접입력</span></label>
      </div>

      <input class="in-t"
             name="text"
             type="text"
             placeholder="추천 문구를 직접 입력해주세요."
      />

      <div class="check_wrap">
        <input type="checkbox" id="check_btn2"/>
        <label for="check_btn2"><span>문구 추천받기</span></label>
      </div>

      <button class="rec-but">문구 추천받기</button>

      <div class="check">
        <input class="in-t"
               type="text"
               name="text"
               placeholder="배너 추천 문구"/>
        <button>확인</button>
      </div>


      <button class="login-but">결과 보기</button>
    </form>
  </div>
</section>

</body>
  );
};
export default Makebanner;
