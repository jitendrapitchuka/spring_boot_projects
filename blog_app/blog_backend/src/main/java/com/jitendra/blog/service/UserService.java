package com.jitendra.blog.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jitendra.blog.dto.UserDto;
import com.jitendra.blog.entity.User;
import com.jitendra.blog.repo.UserRepo;

@Service
@Transactional
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String addUser(UserDto userDto) {
		
		User theuser=new User(userDto.getId(),userDto.getFirstName(),userDto.getLastName(),userDto.getEmail(),passwordEncoder.encode(userDto.getPassword()));
		
		userRepo.save(theuser);
		
		return theuser.getFirstName();
	}

}
