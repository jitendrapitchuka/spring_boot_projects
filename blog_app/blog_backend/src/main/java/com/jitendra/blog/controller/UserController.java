package com.jitendra.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jitendra.blog.dto.UserDto;
import com.jitendra.blog.entity.Posts;
import com.jitendra.blog.service.PostsService;
import com.jitendra.blog.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PostsService thePostService;
	
	@PostMapping("/signup")
	public String signup(@RequestBody UserDto theUserDto) {
		
		String first_name=userService.addUser(theUserDto);
		
		
		return first_name+" success";
	}
	
	@PostMapping("/newpost")
	public String newPost(@RequestBody Posts thepost) {
		
		String post_header=thePostService.addPost(thepost);
		
		
		return post_header+" success";
	}
	
	

}
