package com.jdbctemplate.jdbc.repo;

import com.jdbctemplate.jdbc.entity.User;
import com.jdbctemplate.jdbc.utils.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;


import java.util.Arrays;
import java.util.List;

@Repository
public class UserRepo {

@Autowired
    private JdbcTemplate jdbcTemplate;

    PasswordEncoder  encoder=new BCryptPasswordEncoder();
    public ApiResponse save(User user){

        ApiResponse apiResponse=new ApiResponse();
        String hashPassword=encoder.encode(user.getPass());
        String query="insert into user(id,name,age,city,pass) values(?,?,?,?,?)";

        int ans=jdbcTemplate.update(query,user.getId(),user.getName(),user.getAge(),user.getCity(),hashPassword);

        apiResponse.setData("added succesfullly");
        return apiResponse;


    }

    public void update(User user) {
        String query = "update user set name=?,age=?";
        int ans = jdbcTemplate.update(query, user.getName(), user.getAge());
    }

    public void delete(User user){
        String query="delete from user where id=?";
        int ans=jdbcTemplate.update(query,user.getId());
            System.out.println(ans);

    }

    public ApiResponse findAll(int pageNumber,int pageSize){
        int offset=(pageNumber-1)*pageSize;
        ApiResponse apiResponse=new ApiResponse();
        String query="select * from user Limit ? offset ?";
        List<User> l=jdbcTemplate.query(query, new BeanPropertyRowMapper(User.class),pageSize,offset);
        apiResponse.setData(l);
        return apiResponse;
    }

    public void findById(int id){
        User user=jdbcTemplate.queryForObject("select * from user where id=?",new BeanPropertyRowMapper<>(User.class),id);
        System.out.println(user);
    }

    public User findByName(String name){
        User user=jdbcTemplate.queryForObject("select * from user where name=?",new BeanPropertyRowMapper<>(User.class),name);
       return user;
    }


}
