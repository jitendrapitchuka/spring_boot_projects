package com.jitendra.blog.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jitendra.blog.entity.Posts;

public interface PostsRepo extends JpaRepository<Posts, Integer> {

	
}
