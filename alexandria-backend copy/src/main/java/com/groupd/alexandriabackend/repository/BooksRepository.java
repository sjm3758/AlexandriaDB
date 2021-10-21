package com.groupd.alexandriabackend.repository;

import com.groupd.alexandriabackend.model.Books;
import org.springframework.data.repository.CrudRepository;

public interface BooksRepository extends CrudRepository<Books, Long> {
}
