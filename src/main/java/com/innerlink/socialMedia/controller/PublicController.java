package com.innerlink.socialMedia.controller;


import com.innerlink.socialMedia.Entity.PostEntries;
import com.innerlink.socialMedia.Entity.User;
import com.innerlink.socialMedia.Repo.UserRepo;
import com.innerlink.socialMedia.Response.Apiresponse;
import com.innerlink.socialMedia.services.NewsService;
import com.innerlink.socialMedia.services.PostServices;
import com.innerlink.socialMedia.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/get")
public class PublicController {
    @Autowired
    private NewsService newsService;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserServices userServices;
    @Autowired
    private PostServices postServices;

    @PostMapping("/user")
    public ResponseEntity<User> addUser(@RequestBody User user) {//json ko body me bhejna hai
        try {
            userServices.saveNewUser(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(user, HttpStatus.BAD_REQUEST);
        }


    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllPost() {
        try {
            List<PostEntries> list = postServices.getPost();
            return new ResponseEntity<>(list, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Something Went Wrong !", HttpStatus.BAD_GATEWAY);
        }
    }

    @GetMapping("/verify")
    public ResponseEntity<?> Verification() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String name = authentication.getName();
        User user = userRepo.findByUsername(name);
        if (user != null) {
            return new ResponseEntity<>("Verified", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/news")
    public ResponseEntity<?> getNews(){
        List<Apiresponse.Article> articles=newsService.getNews();
        return new ResponseEntity<>(articles,HttpStatus.OK);
    }


}
