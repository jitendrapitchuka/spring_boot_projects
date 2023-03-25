package com.booksapp.booksstore.dao;

import com.booksapp.booksstore.entity.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReviewRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;
    public void save(Review theReview){

        String query="insert into review(id,email,book_id,review_description) values(?,?,?,?)";

        jdbcTemplate.update(query,theReview.getId(),theReview.getEmail(),theReview.getBookId(),theReview.getReviewDescription());

    }

    public List<Review> findAllByBookID(int id){

        String query="select * from review where book_id=?";

       List<Review> reviews=jdbcTemplate.query(query,new BeanPropertyRowMapper<>(Review.class),id);

       return reviews;
    }


}
