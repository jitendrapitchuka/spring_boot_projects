package com.jitendra.blog.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="posts")
public class Posts {

	@Id
	@Column(name="id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	@Column(name="post_header")
	private String post_header;
	
	@Column(name="description")
	private String description;
	
	@Column(name="likes_count")
	private int likes_count;
	
	@Column(name="email_id")
	private String emailId;
	
	public Posts() {
		
	}

	public Posts(int id, String post_header, String description, int likes_count,String emailId) {
		
		this.id = id;
		this.post_header = post_header;
		this.description = description;
		this.likes_count = likes_count;
		this.emailId=emailId;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPost_header() {
		return post_header;
	}

	public void setPost_header(String post_header) {
		this.post_header = post_header;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getLikes_count() {
		return likes_count;
	}

	public void setLikes_count(int likes_count) {
		this.likes_count = likes_count;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
	
}
