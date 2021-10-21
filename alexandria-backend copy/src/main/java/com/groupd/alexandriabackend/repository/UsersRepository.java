package com.groupd.alexandriabackend.repository;

import com.groupd.alexandriabackend.model.Users;
import org.springframework.data.repository.CrudRepository;

public interface UsersRepository extends CrudRepository<Users, String> {
}
