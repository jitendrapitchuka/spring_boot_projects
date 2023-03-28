package com.booksapp.booksstore.entity;

import javax.persistence.*;

@Entity
@Table(name="checkout")
public class Checkout {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    @Column(name="book_id")
    private int bookId;
    @Column(name="email")
    private String email;
    @Column(name="book_cost")
    private  int bookCost;

    public Checkout(){

    }

    public Checkout(int id, int bookId, String email, int bookCost) {
        this.id = id;
        this.bookId = bookId;
        this.email = email;
        this.bookCost = bookCost;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getBookCost() {
        return bookCost;
    }

    public void setBookCost(int bookCost) {
        this.bookCost = bookCost;
    }

    @Override
    public String toString() {
        return "Checkout{" +
                "id=" + id +
                ", bookId=" + bookId +
                ", email='" + email + '\'' +
                ", bookCost=" + bookCost +
                '}';
    }
}
