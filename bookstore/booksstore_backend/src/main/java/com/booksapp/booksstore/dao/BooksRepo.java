package com.booksapp.booksstore.dao;

import com.booksapp.booksstore.entity.Books;
import org.apache.tomcat.util.buf.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BooksRepo {

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    NamedParameterJdbcTemplate namedParameterJdbcTemplate;
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

    public Books findBookById(int id){
        String query="select * from books where id=?";
        Books book=jdbcTemplate.queryForObject(query,new BeanPropertyRowMapper<>(Books.class),id);

        return book;
    }


//    public List<Books> FilterBooks(List<String> li){
//        String query="select * from books where author in (?)";
//
//        // String query="select * from books where author in (:names)";
//        //SqlParameterSource namedParameters = new MapSqlParameterSource().addValue("names", li);
//       // List<Books> l = namedParameterJdbcTemplate.query(query, namedParameters, new BeanPropertyRowMapper<>(Books.class));
//
//
//        StringBuilder sb = new StringBuilder("select * from books where author IN (");
//        for (int i = 0; i < li.size(); i++) {
//            sb.append("?");
//            if (i < li.size() - 1) {
//                sb.append(",");
//            }
//        }
//        sb.append(")");
//
//
//         List<Books>books=jdbcTemplate.query(sb.toString(),li.toArray(),new BeanPropertyRowMapper<>(Books.class));
//
//
//        return books;
//    }

}
