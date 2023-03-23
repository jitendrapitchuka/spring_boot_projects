package com.booksapp.booksstore.dao;

import com.booksapp.booksstore.entity.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

@Repository
public class LoginRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    PasswordEncoder encoder=new BCryptPasswordEncoder();
    public void save(Login login){
        String hashPass=encoder.encode(login.getPassword());
        String query="insert into login(id,username,email,password) values(?,?,?,?)";
        jdbcTemplate.update(query,login.getId(),login.getUsername(),login.getEmail(),hashPass);
    }

    public Login findByUsername(String email){
        String query="select * from login where email=?";
        Login theLogin=jdbcTemplate.queryForObject(query,new BeanPropertyRowMapper<>(Login.class),email);
        return theLogin;
    }
}
