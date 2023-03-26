package com.booksapp.booksstore.entity;

import javax.persistence.*;

@Entity
@Table(name="books")
public class Books {
@Id
@Column(name="id")
@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

@Column(name="author")
    private String author;

@Column(name="book_title")
    private String book_title;

@Column(name = "book_description")
    private String book_description;

@Column(name = "image")
private String image;

@Column(name = "book_cost")
    private int book_cost;

@Column(name = "Instock")
    private boolean instock;

    public Books(){

    }
    public Books(int id, String author, String book_title, String book_description, String img, int book_cost, boolean instock) {
        this.id = id;
        this.author = author;
        this.book_title = book_title;
        this.book_description = book_description;
        this.image = img;
        this.book_cost = book_cost;
        this.instock = instock;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getBook_title() {
        return book_title;
    }

    public void setBook_title(String book_title) {
        this.book_title = book_title;
    }

    public String getBook_description() {
        return book_description;
    }

    public void setBook_description(String book_description) {
        this.book_description = book_description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String img) {
        this.image = img;
    }

    public int getBook_cost() {
        return book_cost;
    }

    public void setBook_cost(int book_cost) {
        this.book_cost = book_cost;
    }

    public boolean isInstock() {
        return instock;
    }

    public void setInstock(boolean instock) {
        this.instock = instock;
    }

    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", book_title='" + book_title + '\'' +
                ", book_description='" + book_description + '\'' +
                ", img='" + image + '\'' +
                ", book_cost=" + book_cost +
                ", instock=" + instock +
                '}';
    }
}


