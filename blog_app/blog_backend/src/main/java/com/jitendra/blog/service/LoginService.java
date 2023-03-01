package com.jitendra.blog.service;

import java.util.HashMap;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jitendra.blog.dto.LoginRequestDto;
import com.jitendra.blog.dto.SignupRequestDto;
import com.jitendra.blog.entity.User;
import com.jitendra.blog.repo.UserRepo;
import com.jitendra.blog.util.ApiResponse;
import com.jitendra.blog.util.JwtUtils;

@Service
@Transactional
public class LoginService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	 
	
	public ApiResponse addUser(SignupRequestDto userDto) {
		
		ApiResponse apiResponse=new ApiResponse();
		
		User theuser=new User(userDto.getId(),userDto.getFirstName(),userDto.getLastName(),userDto.getEmail(),passwordEncoder.encode(userDto.getPassword()));
		
		userRepo.save(theuser);
		
		apiResponse.setData(theuser.getFirstName());
		
		return apiResponse;
	}

	public ApiResponse login(LoginRequestDto theLoginRequestDto) throws Exception {
		
		ApiResponse apiResponse=new ApiResponse();
		
		User theuser=userRepo.findByEmail(theLoginRequestDto.getEmail());
		boolean flag=passwordEncoder.matches(theLoginRequestDto.getPassword(),theuser.getPassword());
		
		if(theuser==null || flag == false ) {
			throw new Exception("user login failed");
		}
		
		String token=jwtUtils.generateJwt(theuser);
		Map<String,Object>data=new HashMap<>();
		
		data.put("accessToken", token);
		
		apiResponse.setData(data);
		
		return apiResponse;
	}

}
