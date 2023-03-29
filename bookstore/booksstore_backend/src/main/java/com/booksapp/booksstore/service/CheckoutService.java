package com.booksapp.booksstore.service;

import com.booksapp.booksstore.dao.BooksRepo;
import com.booksapp.booksstore.dao.CheckoutRepo;
import com.booksapp.booksstore.entity.Checkout;
import com.booksapp.booksstore.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CheckoutService {

    @Autowired
    CheckoutRepo checkoutRepo;
    @Autowired
    BooksRepo booksRepo;

    public ApiResponse save(Checkout theCheckout){
        ApiResponse apiResponse=new ApiResponse();

        checkoutRepo.save(theCheckout);

        apiResponse.setData("added to cart successfully");

        return apiResponse;
    }

    public ApiResponse delete(Checkout theCheckout){
        ApiResponse apiResponse=new ApiResponse();

        checkoutRepo.delete(theCheckout);

        apiResponse.setData("deleted from cart successfully");

        return apiResponse;
    }

    public ApiResponse deleteByemail(String email){
        ApiResponse apiResponse=new ApiResponse();


        checkoutRepo.deleteBymailId(email);

        apiResponse.setData("deleted from cart successfully");

        return apiResponse;
    }

    public ApiResponse findByemail(String email){
        ApiResponse apiResponse=new ApiResponse();


        apiResponse.setData(checkoutRepo.findByemail(email));



        return apiResponse;
    }
}
