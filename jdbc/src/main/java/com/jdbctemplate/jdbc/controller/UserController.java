package com.jdbctemplate.jdbc.controller;

import com.jdbctemplate.jdbc.entity.User;
import com.jdbctemplate.jdbc.repo.UserRepo;
import com.jdbctemplate.jdbc.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepo userRepo;
@PostMapping("/post")
    public ResponseEntity<ApiResponse> insert(@RequestBody User theuser){

        ApiResponse apiResponse=userRepo.save(theuser);

        return ResponseEntity.ok().body(apiResponse);

    }

    @GetMapping("/get")
    public ResponseEntity<ApiResponse> findall(@RequestParam(defaultValue = "1") int pageno,@RequestParam(defaultValue = "5") int pagesize){

        ApiResponse apiResponse=userRepo.findAll(pageno,pagesize);

        return ResponseEntity.ok().body(apiResponse);

    }

}
