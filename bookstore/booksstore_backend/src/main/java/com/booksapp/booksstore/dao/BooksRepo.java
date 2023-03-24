package com.booksapp.booksstore.dao;

import com.booksapp.booksstore.entity.Books;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BooksRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;
    public List<Books> GetBooks(){

    String query="select * from books";

    List<Books> l=jdbcTemplate.query(query,new BeanPropertyRowMapper<>(Books.class));

    return l;

    }

    public List<Books> findBookByname(String s){
        String query="select * from books where book_title Like ?";
        String searchString="%"+s+"%";
        List<Books>l=jdbcTemplate.query(query,new BeanPropertyRowMapper<>(Books.class),searchString);

    return l;
    }
}
