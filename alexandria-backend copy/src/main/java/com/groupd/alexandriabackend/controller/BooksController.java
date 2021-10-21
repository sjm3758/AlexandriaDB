package com.groupd.alexandriabackend.controller;

import com.groupd.alexandriabackend.model.Books;
import com.groupd.alexandriabackend.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/books")
public class BooksController {
    @Autowired
    BooksService booksservice;

    @GetMapping
    public Iterable<Books> getItems(){
        return booksservice.getItems();
    }

    @PostMapping
    public Books createItem(@RequestBody Books item) {
        return booksservice.createItem(item);
    }

    @GetMapping("/{isbn}")
    public Books getItemById(@PathVariable("isbn") Long isbn) {
        return booksservice.getItemById(isbn);
    }

    @PatchMapping
    public Books updateItem(@RequestBody Books item) {
        return booksservice.updateItems(item);
    }

    @DeleteMapping("/{isbn}")
    public HttpStatus deleteItem(@PathVariable("isbn") Long isbn) {
        return booksservice.deleteItem(isbn);
    }
}
