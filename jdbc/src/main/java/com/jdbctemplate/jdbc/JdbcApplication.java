package com.jdbctemplate.jdbc;

//import com.jdbctemplate.jdbc.entity.User;
//import com.jdbctemplate.jdbc.repo.UserRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class JdbcApplication  {



//	@Autowired
//	UserRepo userRepo;
	public static void main(String[] args) {

		SpringApplication.run(JdbcApplication.class, args);
	}

//		@Override
//		public void run(String... args) throws  Exception {
//			User theuser=new User(1,"sai",18,"hyd");
//			User theuser1=new User(2,"vara",19,"che");
//
//			userRepo.findById(1);
//
//		}




}
