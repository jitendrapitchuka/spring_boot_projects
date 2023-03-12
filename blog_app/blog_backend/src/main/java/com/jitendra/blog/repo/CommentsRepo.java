package com.jitendra.blog.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jitendra.blog.entity.Comments;

public interface CommentsRepo extends JpaRepository<Comments, Integer> {

	public List<Comments> findCommentsByPostId(int postId);
}
