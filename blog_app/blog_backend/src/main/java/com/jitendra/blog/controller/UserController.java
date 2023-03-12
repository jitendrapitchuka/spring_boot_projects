package com.jitendra.blog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jitendra.blog.dto.LoginRequestDto;
import com.jitendra.blog.dto.SignupRequestDto;
import com.jitendra.blog.entity.Comments;
import com.jitendra.blog.entity.Posts;
import com.jitendra.blog.service.CommentsService;
import com.jitendra.blog.service.LoginService;
import com.jitendra.blog.service.PostsService;
import com.jitendra.blog.util.ApiResponse;
import com.jitendra.blog.util.JwtUtils;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private PostsService thePostService;
	@Autowired
	private CommentsService theCommentService;
	@Autowired
	private JwtUtils jwtUtils;
	
	@PostMapping("/signup")
	public ResponseEntity<ApiResponse> signup(@RequestBody SignupRequestDto theUserDto) {
		
		ApiResponse apiResponse=loginService.addUser(theUserDto);
		return ResponseEntity.ok().body(apiResponse);
	}
	
	@PostMapping("/login")
	public ResponseEntity<ApiResponse> login(@RequestBody LoginRequestDto theLoginRequestDto) throws Exception {
		
		ApiResponse apiResponse=loginService.login(theLoginRequestDto);	
		return ResponseEntity.ok().body(apiResponse);
	}
	
	
	
	@PostMapping("/newpost")
	public ResponseEntity<ApiResponse>  newPost(@RequestBody Posts thepost) throws Exception {
		//@RequestHeader(value="authorization",defaultValue="") String auth 
//		jwtUtils.verify(auth);
		
		ApiResponse apiResponse=thePostService.addPost(thepost);
		
		return ResponseEntity.ok().body(apiResponse);
	}
	
	@GetMapping("/posts")
public ResponseEntity<ApiResponse>  posts() {
		
		ApiResponse apiResponse=thePostService.allposts();
		
		return ResponseEntity.ok().body(apiResponse);
	}
	
	@GetMapping("/postsByUserId")
	public ResponseEntity<ApiResponse>  posts(@RequestHeader(value="authorization") String auth,@RequestParam int userId) throws Exception {
		jwtUtils.verify(auth);
			ApiResponse apiResponse=thePostService.postByUserId(userId);
			
			return ResponseEntity.ok().body(apiResponse);
		}
	
	@DeleteMapping("/delete")
	public ResponseEntity<ApiResponse>  delete(@RequestParam int postId) {
		
		ApiResponse apiResponse=thePostService.deleteByPostId(postId);
		
		return ResponseEntity.ok().body(apiResponse);
	}
	
	
	@PutMapping("/put")
public ResponseEntity<ApiResponse>  put(@RequestBody Posts thepost ) {
		
		ApiResponse apiResponse=thePostService.put(thepost.getLikes_count(),thepost.getUserId(),thepost.isLikesFlag(),thepost.getId());
		
		return ResponseEntity.ok().body(apiResponse);
	}
	
	@PostMapping("/postComment")
	public ResponseEntity<ApiResponse> postComm(@RequestBody Comments theComm){
		
		ApiResponse apiResponse=theCommentService.addComment(theComm);
		
		return ResponseEntity.ok().body(apiResponse);
	}
	
	@GetMapping("/comments")
	public ResponseEntity<ApiResponse> postComm(@RequestParam int postId){
		
		ApiResponse apiResponse=theCommentService.getComment(postId);
		
		return ResponseEntity.ok().body(apiResponse);
	}
	
	

}
