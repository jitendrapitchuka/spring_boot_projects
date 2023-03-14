package com.jdbctemplate.jdbc.repo;

import com.jdbctemplate.jdbc.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.Arrays;
import java.util.List;

@Repository
public class UserRepo {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void save(User user){

        String query="insert into user(id,name,age,city) values(?,?,?,?)";

        int ans=jdbcTemplate.update(query,user.getId(),user.getName(),user.getAge(),user.getCity());


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

    public void findAll(){
        String query="select * from user ";
        List<User> l=jdbcTemplate.query(query, new BeanPropertyRowMapper(User.class));
        System.out.println(l.toString());
    }

    public void findById(int id){
        User user=jdbcTemplate.queryForObject("select * from user where id=?",new BeanPropertyRowMapper<>(User.class),id);
        System.out.println(user);
    }
}
