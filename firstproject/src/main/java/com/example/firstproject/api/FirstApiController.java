package com.example.firstproject.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController // 일반 컨트롤러는 View 템플릿을 반환하지만, RestAPI용 컨트롤러! JSON 반환!
public class FirstApiController {

    @GetMapping("/api/hello")
    public String hello() {
        return "hello World!";
    }
}
