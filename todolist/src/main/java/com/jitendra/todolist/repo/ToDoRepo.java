package com.jitendra.todolist.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jitendra.todolist.entity.ToDoentity;

public interface ToDoRepo extends JpaRepository<ToDoentity, Integer> {

}
