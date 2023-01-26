package com.jitendra.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jitendra.todolist.entity.ToDoentity;
import com.jitendra.todolist.repo.ToDoRepo;

@RestController
public class ToDoController {

	@Autowired
	private ToDoRepo todorepo;
	
	@GetMapping("/")
	public List<ToDoentity> alltodoList() {
		
		//themodel.addAttribute("alltodolist", todorepo.findAll());
		
		return todorepo.findAll();
	}
}