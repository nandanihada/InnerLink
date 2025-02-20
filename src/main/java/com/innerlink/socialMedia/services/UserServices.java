package com.innerlink.socialMedia.services;

import com.innerlink.socialMedia.Entity.PostEntries;
import com.innerlink.socialMedia.Entity.User;
import com.innerlink.socialMedia.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Arrays;
import java.util.List;

@Service
public class UserServices {
    private static final PasswordEncoder passwordencoder = new BCryptPasswordEncoder();
    @Autowired
    private UserRepo userRepo;

    public String addUser(User user) {
        userRepo.save(user);
        return "User is added";
    }

    public List<User> getUser() {
        List<User> users = userRepo.findAll();

        return users;
    }

    public User UserById(String username) {
        return userRepo.findByUsername(username);
    }

    public String removeUser(String username) {
        User u = userRepo.findByUsername(username);
        userRepo.delete(u);
        return "User removed successfully";
    }

    public String removeAlluser() {
        userRepo.deleteAll();
        return "Databse is empty";
    }

    public void updateUser(User user) {
        userRepo.save(user);
    }

    public void saveNewUser(User user) {
        user.setPassword(passwordencoder.encode(user.getPassword()));
        user.setRoles(Arrays.asList("USER"));
        userRepo.save(user);
    }


}
