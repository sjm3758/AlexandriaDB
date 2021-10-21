package com.groupd.alexandriabackend.service;

import com.groupd.alexandriabackend.model.Users;

import com.groupd.alexandriabackend.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class UsersService {
    @Autowired
    UsersRepository usersrepository;

    public Iterable<Users> getItems(){
        return usersrepository.findAll();
    }

    public Users getItemById(String username) { return usersrepository.findById(username).get(); }

    public Users createItem(Users item) {
        return usersrepository.save(item);
    }

    public Users updateItems(Users item) {
        return usersrepository.save(item);
    }

    public HttpStatus deleteItem(String username) {
        usersrepository.deleteById(username);
        return HttpStatus.OK;
    }
}
