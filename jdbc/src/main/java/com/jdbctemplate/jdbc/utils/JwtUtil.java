package com.jdbctemplate.jdbc.utils;


import java.util.Date;

import com.jdbctemplate.jdbc.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;



@Component
public class JwtUtil{

    private static String secret="this_is_secret";

    private static long expiryDuration= 60*60;

    public String generateJwt(User user) {

        long milliTime = System.currentTimeMillis();
        long expiryTime = milliTime + expiryDuration*1000;
        Date expiryAt=new Date(expiryTime);
        Date issuedAt = new Date();


        Claims claims= Jwts.claims().setIssuer(Integer.toString(user.getId())).setIssuedAt(issuedAt).setExpiration(expiryAt);
        System.out.println(claims);

        claims.put("name", user.getName());
        claims.put("city", user.getCity());

        return Jwts.builder().setClaims(claims).signWith(SignatureAlgorithm.HS512,secret).compact();


    }

    public void verify(String auth) throws Exception {

        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(auth);
        }
        catch(Exception e) {
            throw new Exception("Acess denied User Not authenticated");
        }

    }

}
