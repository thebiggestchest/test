package com.group.hello.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class HelloEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String message;

    // Getter, Setter, 기본 생성자 등...

    // 기본 생성자
    public Hello() {
    }

    // 메시지를 받아 초기화하는 생성자
    public Hello(String message) {
        this.message = message;
    }

    // ID Getter
    public Long getId() {
        return id;
    }

    // ID Setter
    public void setId(Long id) {
        this.id = id;
    }

    // 메시지 Getter
    public String getMessage() {
        return message;
    }

    // 메시지 Setter
    public void setMessage(String message) {
        this.message = message;
    }

    // 추가적인 Getter, Setter, 기타 메서드가 필요하다면 여기에 작성
}