package com.booksapp.booksstore.controller;

import com.booksapp.booksstore.entity.Checkout;
import com.booksapp.booksstore.service.BooksService;
import com.booksapp.booksstore.service.CheckoutService;
import com.booksapp.booksstore.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class CheckoutController {

    @Autowired
    private CheckoutService checkoutService;
    @PostMapping("/checkout")
    public ResponseEntity<ApiResponse> addTocart(@RequestBody Checkout theCheckout){
        ApiResponse apiResponse=checkoutService.save(theCheckout);

        return ResponseEntity.ok().body(apiResponse);
    }

    @DeleteMapping("/deleteFromCart")
    public ResponseEntity<ApiResponse> deletefromcart(@RequestBody Checkout theCheckout){
        ApiResponse apiResponse=checkoutService.delete(theCheckout);

        return ResponseEntity.ok().body(apiResponse);
    }

    @DeleteMapping("/deletebyemail")
    public ResponseEntity<ApiResponse> deleteBYemail(@RequestParam("email") String email){
        ApiResponse apiResponse=checkoutService.deleteByemail(email);

        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/getByemail")
    public ResponseEntity<ApiResponse> BookByemail(@RequestParam("email") String email){
        ApiResponse apiResponse=checkoutService.findByemail(email);

        return ResponseEntity.ok().body(apiResponse);
    }

}
