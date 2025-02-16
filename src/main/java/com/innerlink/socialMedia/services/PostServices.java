package com.innerlink.socialMedia.services;

import com.innerlink.socialMedia.Entity.PostEntries;
import com.innerlink.socialMedia.Entity.User;
import com.innerlink.socialMedia.Repo.PostRepo;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServices {
    @Autowired
    public PostRepo postRepo;
    @Autowired
    public UserServices userServices;

    public List<PostEntries> getPost() {
        return postRepo.findAll().stream().filter(post->!post.isPrivate()).toList();
    }


    public String postEntries(PostEntries postEntries, String username) {
        User user = userServices.UserById(username);//name se user dhundha
        PostEntries saved = postRepo.save(postEntries);//an entry save kari post me jo aayi thi
        user.getPostEntries().add(saved);//user ki entry me save krdi
        userServices.updateUser(user); //user ko userservice me save kar diya
        return "Post uploaded";
    }

    @Transactional
    public void deleteAllEntries() {

        postRepo.deleteAll();
    }

    public void updateEntries(String title) {

    }

    public void deleteByid(String id, String username) {
        try{
            User user = userServices.UserById(username);
            user.getPostEntries().removeIf(x -> x.getPostid().equals(id));
            userServices.updateUser(user);
            postRepo.deleteById(id);
        }
        catch (Exception e){
            throw new RuntimeException("Something went Wrong !");
        }
    }

    public void likedBy(String postid) {
       try{
           Authentication auth= SecurityContextHolder.getContext().getAuthentication();
           String username=auth.getName();
           PostEntries post = postRepo.findBypostid(postid);
           if (post != null) {
               int likes = post.getLikes();
               post.setLikes(likes + 1);
               if(post.getLikedBy()==null){
                   post.setLikedBy(new ArrayList<>());
               }
               if(post.getLikedBy().contains(username)){
                   throw new RuntimeException("Username Already Exists");
               }
               else{
                   post.getLikedBy().add(username);
               }
               postRepo.save(post);
           }
       }
       catch (Exception e){
           throw new RuntimeException("Something went Wrong !");
       }
    }

    public void addComment(String comment, String postid) {
        try {
            PostEntries post = postRepo.findBypostid(postid);
            if (post != null) {
                if (post.getComments() == null) {
                    post.setComments(new ArrayList<>());
                }
                post.getComments().add(comment);
                postRepo.save(post);
            } else {
                throw new RuntimeException("Post not found!");
            }
        } catch (Exception e) {
            throw new RuntimeException("Something Went Wrong!", e);
        }
    }

    public void setPostPrivate(String username,String postid){
        User user=userServices.UserById(username);
        if(user.getPostEntries().stream().anyMatch(post -> post.getPostid().equals(postid))) {
            PostEntries post=postRepo.findBypostid(postid);
            post.setPrivate(!post.isPrivate());
            postRepo.save(post);
        }
        else{
            throw new RuntimeException("Post Not Found");
        }
    }


}

