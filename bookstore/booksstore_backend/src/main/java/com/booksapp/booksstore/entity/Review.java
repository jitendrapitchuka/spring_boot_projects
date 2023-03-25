package com.booksapp.booksstore.entity;

import javax.persistence.*;

@Entity
@Table(name="review")
public class Review {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
@Column(name = "email")
    private String email;

    @Column(name = "book_id")
    private int bookId;

    @Column(name = "review_description")
    private String reviewDescription;

    public Review(){

    }

    public Review(int id, String email, int bookId, String reviewDesc) {
        this.id = id;
        this.email = email;
        this.bookId = bookId;
        reviewDescription = reviewDesc;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getReviewDescription() {
        return reviewDescription;
    }

    public void setReviewDescription(String reviewDesc) {
        reviewDescription = reviewDesc;
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", bookId=" + bookId +
                ", ReviewDesc='" + reviewDescription + '\'' +
                '}';
    }
}
