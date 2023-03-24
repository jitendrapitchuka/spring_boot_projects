package com.booksapp.booksstore.service;

import com.booksapp.booksstore.dao.LoginRepo;
import com.booksapp.booksstore.entity.Login;
import com.booksapp.booksstore.utils.ApiResponse;
import com.booksapp.booksstore.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class LoginService {

    @Autowired
    private LoginRepo loginRepo;
    @Autowired
    private  JwtUtils jwtUtils;
    PasswordEncoder encoder=new BCryptPasswordEncoder();
    public ApiResponse save(Login login) throws Exception{
        ApiResponse apiResponse=new ApiResponse();

        try {
            loginRepo.save(login);
        }
        catch (Exception e){

            throw new Exception("---------->Insert failed<---------");
        }
        apiResponse.setData("Insert success");

        return apiResponse;
    }

    public ApiResponse checkLoginCredentials(Login login) throws Exception {
        ApiResponse apiResponse=new ApiResponse();
        Login theLogin=loginRepo.findByUsername(login.getEmail());
        if(theLogin==null ){
            throw new Exception("------------->User not Found<----------");
        }
        boolean flag=encoder.matches(login.getPassword(),theLogin.getPassword());
        if(flag==false ){
            throw new Exception("------------->password not match<----------");
        }


        String token=jwtUtils.generateJwt(theLogin);
        Map<String,Object>m=new HashMap<>();
        m.put("token",token);
        m.put("email",theLogin.getEmail());
        m.put("username",theLogin.getUsername());
        m.put("userId",theLogin.getId());
        apiResponse.setData(m);
        return  apiResponse;
    }
}
