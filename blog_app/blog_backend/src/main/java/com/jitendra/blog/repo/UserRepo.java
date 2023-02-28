package com.jitendra.blog.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jitendra.blog.entity.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	

}
