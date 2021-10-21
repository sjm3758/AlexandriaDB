package com.groupd.alexandriabackend.service;

import com.groupd.alexandriabackend.model.Books;
import com.groupd.alexandriabackend.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class BooksService {
    @Autowired
    BooksRepository booksrepository;

    public Iterable<Books> getItems(){
        return booksrepository.findAll();
    }

    public Books getItemById(Long isbn) {
        return booksrepository.findById(isbn).get();
    }

    public Books createItem(Books item) {
        return booksrepository.save(item);
    }

    public Books updateItems(Books item) {
        return booksrepository.save(item);
    }

    public HttpStatus deleteItem(Long isbn) {
        booksrepository.deleteById(isbn);
        return HttpStatus.OK;
    }
}
