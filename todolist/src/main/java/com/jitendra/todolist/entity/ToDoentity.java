package com.jitendra.todolist.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;





@Entity
@Table(name="my_todo")
public class ToDoentity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	
	@Column(name="item")
	@NotEmpty
	private String item;	
	
	public ToDoentity() {
		
	}
	public ToDoentity(int id,String item) {
		this.id = id;
		this.item = item;
	}
	
	public ToDoentity( String item) {
		this.item = item;
	}
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}
	
	
}
