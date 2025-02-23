package com.innerlink.socialMedia.controller;

import com.innerlink.socialMedia.Entity.User;
import com.innerlink.socialMedia.Repo.UserRepo;
import com.innerlink.socialMedia.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServices userServices;
    @Autowired
    private UserRepo userRepo;
    @PostMapping
@CrossOrigin
   @GetMapping
    public ResponseEntity<?> getUser(){
       List<User> user = userServices.getUser();
       return  new ResponseEntity<>(user,HttpStatus.OK);
   }
   @CrossOrigin
   @GetMapping("/username")
   public ResponseEntity<User> getUserById(){
        //oo bhai tum password ,username fetch karke lao
       Authentication authenticationManager= SecurityContextHolder.getContext().getAuthentication();
       String username=authenticationManager.getName();
        Optional<User> user= Optional.ofNullable(userServices.UserById(username));
       return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
   }
   @CrossOrigin
   @DeleteMapping
    public ResponseEntity<?> removeAlluser(){
        userServices.removeAlluser();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
   }
   @CrossOrigin
   @DeleteMapping("/username")
    public String removeUser(){
       Authentication authenticationManager= SecurityContextHolder.getContext().getAuthentication();
       String username=authenticationManager.getName();
        return userServices.removeUser(username);
   }

@CrossOrigin
@PutMapping("/update")
public ResponseEntity<?> updateTheUser(@RequestBody User user) {
    // Get the currently authenticated user's username
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String authUsername = authentication.getName();

    // Fetch the existing user from the database
    Optional<User> existingUser = Optional.ofNullable(userServices.UserById(authUsername));

    if (existingUser.isPresent()) {
        User currUser = existingUser.get();

        // Update fields only if they are provided in the request and not empty
        if (user.getUsername() != null && !user.getUsername().isEmpty()) {
            currUser.setUsername(user.getUsername());
        }
        if (user.getEmail() != null && !user.getEmail().isEmpty()) {
            currUser.setEmail(user.getEmail());
        }

        // Save the updated user
        userServices.updateUser(currUser);

        // Return success response
        return new ResponseEntity<>("User Updated Successfully", HttpStatus.ACCEPTED);
    } else {
        // Return error response if the user is not found
        return new ResponseEntity<>("User Not Found", HttpStatus.NOT_FOUND);
    }
}
}
