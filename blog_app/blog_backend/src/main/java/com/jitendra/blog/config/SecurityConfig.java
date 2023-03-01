package com.jitendra.blog.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;



@Configuration
@EnableWebSecurity
public class SecurityConfig   {

	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		http.cors().and().csrf().disable();
		
		http.authorizeHttpRequests((requests) -> requests
			.antMatchers("/api/signup","/api/newpost","/api/login").permitAll()
			.anyRequest().authenticated());
		
		
		// http.authenticationProvider(authenticationProvider());

		return http.build();
	}
	
	
	
	
	 @Bean
	   public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	
	
	   
	   
}
