package com.jitendra.blog.util;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.jitendra.blog.entity.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtUtils {

	private static String secret="this_is_secret";
	
	private static long expiryDuration= 60*60;
	
	public String generateJwt(User user) {
		
		long milliTime = System.currentTimeMillis();
		long expiryTime = milliTime + expiryDuration*1000;
		Date expiryAt=new Date(expiryTime);
		Date issuedAt = new Date();
		
		
		Claims claims=Jwts.claims().setIssuer(Integer.toString(user.getId())).setIssuedAt(issuedAt).setExpiration(expiryAt);
		
		claims.put("name", user.getFirstName());
		claims.put("email", user.getEmail());
		
		return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512,secret).compact();
		
		
	}
	
	public void verify(String auth) throws Exception {
		
		try {
		Jwts.parser().setSigningKey(secret).parseClaimsJws(auth);
		}
		catch(Exception e) {
			throw new Exception("Acess denied");
		}
		
		}
	
}
