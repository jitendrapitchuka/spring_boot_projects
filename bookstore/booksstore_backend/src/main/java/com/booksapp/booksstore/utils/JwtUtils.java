package com.booksapp.booksstore.utils;

import com.booksapp.booksstore.entity.Login;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtils {

    private static String secret="this_is_secret";

    private static long expiryDuration= 60*60;

    public String generateJwt(Login login) {

        long milliTime = System.currentTimeMillis();
        long expiryTime = milliTime + expiryDuration*1000;
        Date expiryAt=new Date(expiryTime);
        Date issuedAt = new Date();


        Claims claims= Jwts.claims().setIssuer(Integer.toString(login.getId())).setIssuedAt(issuedAt).setExpiration(expiryAt);

        claims.put("name", login.getUsername());
        claims.put("email", login.getEmail());

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
