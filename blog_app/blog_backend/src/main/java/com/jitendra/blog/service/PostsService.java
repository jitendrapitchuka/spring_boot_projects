package com.jitendra.blog.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jitendra.blog.entity.Posts;
import com.jitendra.blog.repo.PostsRepo;

@Service
@Transactional
public class PostsService {

	@Autowired
	private PostsRepo postrepo;
	
	public String addPost(Posts thepost) {
		
		Posts thePost=new Posts(thepost.getId(),thepost.getPost_header(),thepost.getDescription(),thepost.getLikes_count());
		
		postrepo.save(thePost);
		
		return thePost.getPost_header();
	}
}
