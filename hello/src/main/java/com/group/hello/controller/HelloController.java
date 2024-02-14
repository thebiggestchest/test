package com.group.hello.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import com.group.hello.service.HelloUserinfo;

// import com.group.hello.service.HelloService;
// import com.group.hello.service.HelloUserinfo;
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class HelloController  {

    private final Map<String, HelloUserinfo> userDatabase = new HashMap<>();

    @PostMapping("/signup")
    public String handleSignup(@RequestBody HelloUserinfo userInfo) {
        // 여기서 userInfo를 처리하고 응답을 반환
        System.out.println("Received user info: " + userInfo.toString());
        // 실제로는 이곳에서 데이터를 저장하고 회원가입 처리를 해야 합니다.
        userDatabase.put(userInfo.getUserid(), userInfo);
        return "success";
    }
    @PostMapping("/login")
    public ResponseEntity<String> handleLogin(@RequestBody HelloUserinfo loginInfo) {
        String userid = loginInfo.getUserid();
        String userpassword = loginInfo.getUserpassword();
    
        // userDatabase에서 userId에 해당하는 사용자 정보 가져오기
        HelloUserinfo storedUserInfo = userDatabase.get(userid);
    
        if (storedUserInfo != null && storedUserInfo.getUserpassword().equals(userpassword)) {
            // 로그인 성공
            System.out.println("Login successful for user: " + userid + userpassword);
            return ResponseEntity.ok("success");
        } else {
            // 로그인 실패
            System.out.println("Login failed for user: " + userid + userpassword);
            return ResponseEntity.status(401).body("failure");
        }
    }
    
    
}

