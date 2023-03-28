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

//    public void findByemail(String email){
//        String sql="Select book_id from checkout where email=?";
//        List<Checkout>l=jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Checkout.class),email);
//    System.out.println(l);
//
////        String sql = "SELECT b.image, b.book_title "
////                + "FROM book b "
////                + "INNER JOIN checkout c ON b.id = c.book_id "
////                + "WHERE b.id = ?";
////        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Books.class),id);
//
//    }

}
