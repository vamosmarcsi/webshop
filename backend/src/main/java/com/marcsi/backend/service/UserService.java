package com.marcsi.backend.service;

import com.marcsi.backend.model.User;

import java.util.List;

public interface UserService {
    List<User> getUsers();
    User getUserById(Long id);
    User createUser(User user);
    User updateUser(Long id, User user);
    void deleteUserById(Long id);
}
