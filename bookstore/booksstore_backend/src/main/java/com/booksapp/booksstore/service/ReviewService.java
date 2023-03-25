package com.booksapp.booksstore.service;

import com.booksapp.booksstore.dao.ReviewRepo;
import com.booksapp.booksstore.entity.Review;
import com.booksapp.booksstore.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    ReviewRepo reviewRepo;

    public ApiResponse save(Review review){
        ApiResponse apiResponse=new ApiResponse();

        reviewRepo.save(review);
        apiResponse.setData("data inserted");
        return apiResponse;
    }

    public ApiResponse findAllByID(int id){
        ApiResponse apiResponse=new ApiResponse();

        List<Review> l=reviewRepo.findAllByBookID(id);

        apiResponse.setData(l);
        return apiResponse;
    }


}
