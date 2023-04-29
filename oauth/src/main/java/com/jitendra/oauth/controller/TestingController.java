package com.jitendra.oauth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestingController {

    @GetMapping("/")
    public String home(){
        return "home";
    }

    @GetMapping("/secure")
    public String secure(){
        return "secured page";
    }
}
