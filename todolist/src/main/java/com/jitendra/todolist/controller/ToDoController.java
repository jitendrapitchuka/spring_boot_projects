package com.jitendra.todolist.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.jitendra.todolist.entity.ToDoentity;
import com.jitendra.todolist.repo.ToDoRepo;

@Controller
public class ToDoController {

	@Autowired
	private ToDoRepo todorepo;
	
	@GetMapping("/")
	public String alltodoList(Model themodel) {
		
		themodel.addAttribute("alltodolist", todorepo.findAll());
		
		return "alltodos";
	}
	
	@PostMapping("/update") 
	public String showUpdate(@RequestParam("id") int theid,Model themodel) {
		
		themodel.addAttribute("updateitem", todorepo.findById(theid));
		
		return "updateForm";
	}
	
	@PostMapping("/save")
	public String saveForm(@ModelAttribute("updateitem") ToDoentity updateObj) {
		
		todorepo.save(updateObj);
		
		return "redirect:/";
	}
	
	@PostMapping("/delete")
	public String deleteForm(@RequestParam("id") int theid) {
		
		todorepo.deleteById(theid);
		
		return "redirect:/";
	}
	
	@GetMapping("/add")
	public String addItem(Model themodel) {
		
		ToDoentity empObj=new ToDoentity();
		themodel.addAttribute("updateitem", empObj);
		return "updateForm";
	}
}
