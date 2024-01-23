import React, { useState } from 'react';
import './signup.css';


// 함수형 컴포넌트인 Login을 정의합니다.
const Signup = () => {
    const [username, setUserName] = useState('');
    const [userid, setUserId] = useState('');
    const [userpassword, setUserPw] = useState('');
    const [userCRN, setUserCRN] = useState('');
    
    const handleSignup = () => {
        // 간단한 형태로 로컬 스토리지에 사용자 정보를 저장
        const userInfo = { username, userid, userpassword, userCRN };
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        alert('회원가입이 되었습니다')
        console.log('회원가입이 완료되었습니다.', userInfo);
    };

  // JSX를 반환하여 화면을 구성합니다.
    return (
    <body>
<header>
  <div class="banner-header">

    <h2 class="banner-title">MAKEBANNER</h2>

    <div class="charts-see-all">

      <a class="go-login" href="#">
        로그인
      </a>

      <a class="go-login" href="#">
        회원가입
      </a>

      <button class="go-start">
        <a class="go-go" href="#">
          시작하기
        </a>
      </button>

    </div>

  </div>
</header>

<section>
  <div class="container">
    <form class= "login">
      <h1 class= "login-title">회원가입</h1>

      <label>이름</label>
      <input
              name="username"
              type="text"
              placeholder="이름을 입력하세요."
              onChange={(e) => setUserName(e.target.value)}
      />

      <label>아이디</label>
      <input
              name="id"
              type="text"
              placeholder="아이디를 입력하세요."
              onChange={(e) => setUserId(e.target.value)}
      />
      <label>비밀번호</label>
      <input
              name="password"
              type="password"
              placeholder="비밀번호를 입력하세요."
              onChange={(e) => setUserPw(e.target.value)}
      />

      <label>비밀번호 확인</label>
      <input
              name="password"
              type="password"
              placeholder="다시 비밀번호를 입력하세요."
      />

      <label>사업자등록번호</label>
      <input
              name="number"
              type="text"
              placeholder="사업자등록번호를 입력하세요."
              onChange={(e) => setUserCRN(e.target.value)}
      />

      <button class="login-but" onClick={handleSignup}>회원가입</button>
      <div class= "login-signup">
        회원이신가요?
        <a class="login-signup-link" href="#">로그인하기</a>
      </div>
    </form>
  </div>
</section>

</body>
  );
};
export default Signup;