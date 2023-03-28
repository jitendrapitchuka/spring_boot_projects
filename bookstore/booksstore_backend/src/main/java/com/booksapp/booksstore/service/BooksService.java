package com.booksapp.booksstore.service;

import com.booksapp.booksstore.dao.BooksRepo;
import com.booksapp.booksstore.entity.Books;
import com.booksapp.booksstore.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BooksService {

    @Autowired
    private BooksRepo booksRepo;

    public ApiResponse findAllBooks(){
        ApiResponse apiResponse=new ApiResponse();

        List<Books> l=booksRepo.GetBooks();
        apiResponse.setData(l);
        return apiResponse;
    }

    public ApiResponse findBooksBySearch(String s){
        ApiResponse apiResponse=new ApiResponse();

        List<Books> l=booksRepo.findBookByname(s);
        apiResponse.setData(l);
        return apiResponse;
    }




    public ApiResponse findBookByid(int id){
        ApiResponse apiResponse=new ApiResponse();

        Books l=booksRepo.findBookById(id);
        apiResponse.setData(l);
        return apiResponse;
    }




}
