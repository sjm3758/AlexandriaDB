package com.groupd.alexandriabackend.model;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "Users")
public class Users {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    @Column
    private String password;
    @Column
    private ArrayList<Books> booksOut = new ArrayList<Books>();
    @Column
    private ArrayList<Books> reservedBooks = new ArrayList<Books>();
    @Column
    private boolean admin;

    public Users() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<Books> getBooksOut() {
        return booksOut;
    }

    public void setBooksOut(ArrayList<Books> booksOut) {
//        addBooksOut(item);
        this.booksOut = booksOut;
    }

//    public void addBooksOut(Books item){
//        this.booksOut.add(item);
//    }

    public ArrayList<Books> getReservedBooks() {
        return reservedBooks;
    }

    public void setReservedBooks(ArrayList<Books> reservedBooks) {
//        addReservedBooks(item);
        this.reservedBooks = reservedBooks;
    }

//    public void addReservedBooks(Books item){
//        this.reservedBooks.add(item);
//    }
    public boolean isAdmin() {
        return admin;
    }

    public void setAdmin(boolean admin) {
        this.admin = admin;
    }
}
