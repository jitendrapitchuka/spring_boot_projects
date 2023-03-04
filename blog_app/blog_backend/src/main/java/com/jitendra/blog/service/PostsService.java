package com.jitendra.blog.service;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jitendra.blog.entity.Posts;
import com.jitendra.blog.repo.PostsRepo;
import com.jitendra.blog.util.ApiResponse;

@Service
@Transactional
public class PostsService {

	@Autowired
	private PostsRepo postrepo;
	
	
	public ApiResponse addPost(Posts thepost) {
		
		ApiResponse apiResponse=new ApiResponse();
		Posts thePost=new Posts(thepost.getId(),thepost.getPost_header(),thepost.getDescription(),thepost.getLikes_count(),thepost.getEmailId());
		
		postrepo.save(thePost);
		
		apiResponse.setData(thePost);
		
		return apiResponse ;
	}
	
	public ApiResponse allposts() {
		ApiResponse apiResponse=new ApiResponse();
		
		List<Posts> user_posts=postrepo.allPosts();
		
		apiResponse.setData(user_posts);
	
		return apiResponse;
		
		
	}
}
