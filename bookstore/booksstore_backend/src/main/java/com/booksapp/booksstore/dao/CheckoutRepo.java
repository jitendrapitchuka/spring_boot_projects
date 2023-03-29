package com.booksapp.booksstore.dao;

import com.booksapp.booksstore.entity.Books;
import com.booksapp.booksstore.entity.Checkout;
import com.booksapp.booksstore.entity.Review;
import org.hibernate.annotations.Check;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CheckoutRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public void save(Checkout theCheckout){

        String query="insert into checkout(id,book_id,email,book_cost) values(?,?,?,?)";

        jdbcTemplate.update(query,theCheckout.getId(),theCheckout.getBookId(),theCheckout.getEmail(),theCheckout.getBookCost());

    }

    public void delete(Checkout theCheckout){

        String query="delete from checkout where book_id=? and email=? ";
        jdbcTemplate.update(query,theCheckout.getBookId(),theCheckout.getEmail());


    }

    public void deleteBymailId(String email){

    try {
        String query = "delete from checkout where  email=?";
        jdbcTemplate.update(query, email);
        System.out.println(email);
    }
    catch (Exception e){
        System.out.println(e);
    }

    }

    public List<Books> findByemail(String email){

        String query="select b.image,b.book_title from books_store.books b join books_store.checkout c on b.id=c.book_id where c.email=? " ;

        List<Books> b=jdbcTemplate.query(query,new BeanPropertyRowMapper<>(Books.class),email);
        System.out.println(b);
        return b;

    }

}
