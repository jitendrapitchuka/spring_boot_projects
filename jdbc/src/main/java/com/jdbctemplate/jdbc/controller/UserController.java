package com.jdbctemplate.jdbc.controller;

import com.jdbctemplate.jdbc.entity.User;
import com.jdbctemplate.jdbc.repo.UserRepo;
import com.jdbctemplate.jdbc.utils.ApiResponse;

import com.jdbctemplate.jdbc.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepo userRepo;

    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;


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

    @GetMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody User user) throws Exception{
System.out.println("helo");

try {
    authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getName(), user.getPass()));
}
catch (Exception e){
    System.out.println(e.getMessage());
    throw new Exception("user auth fail");
}
        String token=jwtUtil.generateJwt(user);
        ApiResponse apiResponse=new ApiResponse();
        apiResponse.setData(token);




        return ResponseEntity.ok().body(apiResponse);
    }

}

//------------------>reference
//@Component
//public class AuthenticationManager implements org.springframework.security.authentication.AuthenticationManager {
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        String username = authentication.getName();
//        String password = authentication.getCredentials().toString();
//
//        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//
//        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
//            throw new BadCredentialsException("Invalid username or password");
//        }
//
//        return new UsernamePasswordAuthenticationToken(userDetails, password, userDetails.getAuthorities());
//    }
//}
