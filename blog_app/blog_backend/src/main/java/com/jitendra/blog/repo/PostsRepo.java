package com.jitendra.blog.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.jitendra.blog.entity.Posts;


public interface PostsRepo extends JpaRepository<Posts, Integer> {
	
	@Query(value="SELECT e FROM Posts e")
	public List<Posts> allPosts();
	
	
	public List<Posts> findByUserId(int userId);
	
	@Modifying
	@Query(value="update Posts  set likes_count=:count,likes_flag=:likesFlag where  id=:postId and user_id=:Id")
	 public void updateLikes(int count,int Id,boolean likesFlag,int postId);
	
}