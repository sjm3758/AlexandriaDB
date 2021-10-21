package com.groupd.alexandriabackend.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "Books")

public class Books implements Serializable {
//    @Id
//    @Column
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long Id;
    @Id
    @Column
    private Long isbn;
    @Column
    private String title;
    @Column
    private String author;
    @Column
    private String publicationInfo;
    @Column
    private int pages;
    @Column
    private String itemStatus;
    @Column
    private String image;
    @Column(columnDefinition = "text")
    private String description;

    public Books() {
    }

    public Books(Long isbn, String title, String author, String publicationInfo, int pages, String itemStatus, String image, String description) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.publicationInfo = publicationInfo;
        this.pages = pages;
        this.itemStatus = itemStatus;
        this.image = image;
        this.description = description;
    }
//    public Long getId() {
//        return Id;
//    }
//
//    public void setId(Long id) {
//        Id = id;

//    }
public long getIsbn() {
    return isbn;
}

    public void setIsbn(long isbn) {
        this.isbn = isbn;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublicationInfo() {
        return publicationInfo;
    }

    public void setPublicationInfo(String publicationInfo) {
        this.publicationInfo = publicationInfo;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getItemStatus() {
        return itemStatus;
    }

    public void setItemStatus(String itemStatus) {
        this.itemStatus = itemStatus;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}


