package com.jdbctemplate.jdbc.utils;

import com.jdbctemplate.jdbc.entity.User;
import com.jdbctemplate.jdbc.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomerUserDetailService
 implements UserDetailsService {

    @Autowired
    UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user=userRepo.findByName(username);

        if(user==null)
            throw new UsernameNotFoundException("user not found");

        return new org.springframework.security.core.userdetails.User(user.getName(), user.getPass(),
                new ArrayList<>());
    }
}
