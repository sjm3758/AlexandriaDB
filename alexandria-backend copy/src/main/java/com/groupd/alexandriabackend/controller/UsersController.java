package com.groupd.alexandriabackend.controller;

import com.groupd.alexandriabackend.model.Users;
import com.groupd.alexandriabackend.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UsersController {
    @Autowired
    UsersService usersservice;
    @GetMapping
    public Iterable<Users> getItems(){
        return usersservice.getItems();
    }

    @PostMapping
    public Users createItem(@RequestBody Users item) {
        return usersservice.createItem(item);
    }

    @GetMapping("/{username}")
    public Users getItemById(@PathVariable String username) {
        return usersservice.getItemById(username);
    }

    @PatchMapping
    public Users updateItem(@RequestBody Users item) {
        return usersservice.updateItems(item);
    }

    @DeleteMapping("/{username}")
    public HttpStatus deleteItem(@PathVariable String username) {
        return usersservice.deleteItem(username);
    }
}
