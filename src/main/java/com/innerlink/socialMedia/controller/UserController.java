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
        if(user.isPresent()){
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
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
   @PutMapping("/username")
    public ResponseEntity<?> updateUser(@RequestBody User user){
       Authentication authenticationManager= SecurityContextHolder.getContext().getAuthentication();
       String username=authenticationManager.getName();
      User user1=userServices.UserById(username);
       System.out.println(user1);
       user1.setUsername(user.getUsername());
       userServices.updateUser(user1);
       return new ResponseEntity<>("Updated !",HttpStatus.OK);
   }
}
