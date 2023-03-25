package com.booksapp.booksstore.controller;

import com.booksapp.booksstore.dao.ReviewRepo;
import com.booksapp.booksstore.entity.Review;
import com.booksapp.booksstore.service.ReviewService;
import com.booksapp.booksstore.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReviewController {
    @Autowired
    ReviewService reviewService;

    @PostMapping("/review")
    public ResponseEntity<ApiResponse> saveReview(@RequestBody Review review){
        ApiResponse apiResponse=reviewService.save(review);

        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/reviewById")
    public ResponseEntity<ApiResponse> saveReview(@RequestParam("bookId")int id){
        ApiResponse apiResponse=reviewService.findAllByID(id);

        return ResponseEntity.ok().body(apiResponse);
    }

}
