package com.jitendra.todolist.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import com.jitendra.todolist.entity.ToDoentity;
import com.jitendra.todolist.repo.ToDoRepo;

@RestController
public class ToDoController {

	@Autowired
	private ToDoRepo todorepo;
	

	
	@GetMapping("/items")
	public List<ToDoentity> alltodoList(Model themodel) {
		
		//themodel.addAttribute("alltodolist", todorepo.findAll());
		
		//return "alltodos";
		return todorepo.findAll();
	}
	
	@GetMapping("/items/{theid}")
	public Optional<ToDoentity> todobyid(@PathVariable int theid) {
		
		return todorepo.findById(theid);
		
	}
	
	@PutMapping("/items") 
	public ToDoentity showUpdate(@RequestBody ToDoentity theentity) {
		
		//themodel.addAttribute("updateitem", todorepo.findById(theid));
		todorepo.save(theentity);
		return theentity;
	}
	
//	@PostMapping("/save")
//	public String saveForm(@Valid @ModelAttribute("updateitem") ToDoentity updateObj, BindingResult bindingResult) {
//		System.out.println("/////////////"+updateObj.getItem()+"//////////////////");
//		if (bindingResult.hasErrors()) {
//			return "updateForm";
//		}
//		todorepo.save(updateObj);
//		
//		return "redirect:/";
//	}
	
	
	
	
	
	@DeleteMapping("/items/{theid}")
	public String deleteForm(@PathVariable int theid) {
		
		todorepo.deleteById(theid);
		
		//return "redirect:/";
		return "deleted success";
	}
	
	@PostMapping("/items")
	public ToDoentity addItem(@RequestBody ToDoentity theentity) {
		theentity.setId(0);
		todorepo.save(theentity);
		
		//themodel.addAttribute("updateitem", empObj);
		return theentity;
	}
}
