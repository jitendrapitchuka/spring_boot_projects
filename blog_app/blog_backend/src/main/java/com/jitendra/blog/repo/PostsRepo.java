package com.jitendra.blog.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jitendra.blog.entity.Posts;


public interface PostsRepo extends JpaRepository<Posts, Integer> {
	
	@Query(value="SELECT e FROM Posts e")
	public List<Posts> allPosts();
	
	
	public List<Posts> findByUserId(int userId);
	

}
