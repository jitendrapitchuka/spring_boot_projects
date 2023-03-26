package com.booksapp.booksstore.controller;

import com.booksapp.booksstore.dao.BooksRepo;
import com.booksapp.booksstore.entity.Books;
import com.booksapp.booksstore.service.BooksService;
import com.booksapp.booksstore.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class BooksController {

    @Autowired
    private BooksService booksService;
    @GetMapping("/books")
    public ResponseEntity<ApiResponse> AllBooks(){
        ApiResponse apiResponse=booksService.findAllBooks();

        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/booksBySearch")
    public ResponseEntity<ApiResponse> AllBooks(@RequestParam("search") String s){
        ApiResponse apiResponse=booksService.findBooksBySearch(s);

        return ResponseEntity.ok().body(apiResponse);
    }


    @GetMapping("/bookById")
    public ResponseEntity<ApiResponse> BookById(@RequestParam("bookId") int id){
        ApiResponse apiResponse=booksService.findBookByid(id);

        return ResponseEntity.ok().body(apiResponse);
    }


}
