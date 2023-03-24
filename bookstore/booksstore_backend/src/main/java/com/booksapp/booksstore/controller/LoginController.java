package com.booksapp.booksstore.controller;

import com.booksapp.booksstore.entity.Login;
import com.booksapp.booksstore.service.LoginService;
import com.booksapp.booksstore.utils.ApiResponse;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse>  Signup(@RequestBody Login login) throws Exception {

        ApiResponse apiResponse=loginService.save(login);

        return ResponseEntity.ok().body(apiResponse);
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody Login login) throws Exception {
        ApiResponse apiResponse=loginService.checkLoginCredentials(login);
        return ResponseEntity.ok().body(apiResponse);
    }
}
