package com.jitendra.blog.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jitendra.blog.entity.Comments;
import com.jitendra.blog.repo.CommentsRepo;
import com.jitendra.blog.util.ApiResponse;

@Service
@Transactional
public class CommentsService {

	@Autowired
	private CommentsRepo commentsRepo;
	
//	@Autowired
//	private PostsRepo postrepo;
//	@Autowired
//	private UserRepo userrepo;
	
	public ApiResponse addComment(Comments theComment) {
		
		ApiResponse apiResponse=new ApiResponse();
		
		Comments comment=new Comments(theComment.getId(),theComment.getComment(),theComment.getUserId(),theComment.getPostId());
		
		commentsRepo.save(comment);
		
		apiResponse.setData(comment);
		
		return apiResponse;
		
	}
	
public ApiResponse getComment(int postid) {
		
		ApiResponse apiResponse=new ApiResponse();
		
		List<Comments>allComments=commentsRepo.findCommentsByPostId(postid);
		
		apiResponse.setData(allComments);
		
		return apiResponse;
		
	}
	
	
	
}
