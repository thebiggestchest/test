package com.group.hello.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.web.servlet.error.ErrorController;
// import org.springframework.http.ResponseEntity;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.hello.service.HelloUserinfo;

// import com.group.hello.service.HelloService;
// import com.group.hello.service.HelloUserinfo;
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
@RestController
@RequestMapping("/api")
public class HelloController  {
    @PostMapping("/signup")
    public String handleSignup(@RequestBody HelloUserinfo userInfo) {
        // 여기서 userInfo를 처리하고 응답을 반환
        System.out.println("Received user info: " + userInfo.toString());
        // 실제로는 이곳에서 데이터를 저장하고 회원가입 처리를 해야 합니다.
        return "Signup successful!";
    }
    
    
    
    
    // @PostMapping("/signup")
    // public String handleSignup(@RequestBody String userInfo) {
    //     // 여기서 userInfo를 처리하고 응답을 반환
    //     return "Signup successful!";
    // }
    // @PostMapping("/signup")
    // public ResponseEntity<String> signUp(@RequestBody HelloUserinfo userInfo) {
    //     // 여기에서 userInfo를 이용하여 회원가입 처리를 수행
    //     // userInfo에는 클라이언트에서 보낸 사용자 정보가 들어 있습니다.
        
    //     // 예시로 출력
    //     System.out.println("Received signup request: " + userInfo);
        
    //     // 응답 생성
    //     return ResponseEntity.ok("Signup successful!");
    // }
    //     @Autowired
    // private HelloService HelloService;

    // @PostMapping("/signup")
    // public ResponseEntity<String> signUp(@RequestBody HelloUserinfo hellouserInfo) {
    //     HelloService.signUp(hellouserInfo);
    //     userRepository.save(save);
    //     return ResponseEntity.ok("회원가입이 성공했습니다.");
    // }
}

