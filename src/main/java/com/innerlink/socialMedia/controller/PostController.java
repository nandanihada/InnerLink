package com.innerlink.socialMedia.controller;
import com.innerlink.socialMedia.Entity.CommentReq;
import com.innerlink.socialMedia.Entity.PostEntries;
import com.innerlink.socialMedia.Entity.User;
import com.innerlink.socialMedia.services.PostServices;
import com.innerlink.socialMedia.services.UserServices;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/post")

public class PostController {
    @Autowired
   public PostServices postServices;
    @Autowired
    private UserServices userServices;
    private Map<Long, PostEntries> map=new HashMap<>();
@CrossOrigin
    @GetMapping()
    public ResponseEntity<?> getAll(){
        Authentication authenticationManager= SecurityContextHolder.getContext().getAuthentication();
        String username=authenticationManager.getName();
        User user = userServices.UserById(username);
        List<PostEntries> all=user.getPostEntries();
        return new ResponseEntity<>(all,HttpStatus.OK);
    }
    @CrossOrigin
    @PostMapping("/create-new")
    public ResponseEntity<?> postContent(@RequestBody PostEntries postEntries){
        Authentication authenticationManager= SecurityContextHolder.getContext().getAuthentication();
        String username=authenticationManager.getName();
        PostEntries clone= new PostEntries();
        String uid= UUID.randomUUID().toString();
        clone.setPostid(uid);
        clone.setPrivate(false);
        clone.setTitle(postEntries.getTitle());
        clone.setCaption(postEntries.getCaption());
        postServices.postEntries(clone,username);
        return new ResponseEntity<>(HttpStatus.OK);
    }
@CrossOrigin
@DeleteMapping("/deletePost/{id}")
public ResponseEntity<?> deleteById(@PathVariable String id){
   Authentication auth=SecurityContextHolder.getContext().getAuthentication();
   String authUsername=auth.getName();
   if(!authUsername.isEmpty()){
       try{
           postServices.deleteByid(id,authUsername);
           return new ResponseEntity<>("Post Deleted Successfully!",HttpStatus.OK);
       }
       catch (Exception e){
            return new ResponseEntity<>("Post Not Found !",HttpStatus.NOT_FOUND);
       }
   }
   return new ResponseEntity<>("Something Went Wrong!",HttpStatus.BAD_REQUEST);
}

@CrossOrigin
@PostMapping("/likes/{postid}")
    public ResponseEntity<?> addLikes(@PathVariable String postid){
        postServices.likedBy(postid);
        return new ResponseEntity<>(HttpStatus.OK);
}
@CrossOrigin
@PostMapping("/comment/{postid}")
    public ResponseEntity<?> addComment(@RequestBody CommentReq comment, @PathVariable String postid){
        postServices.addComment(comment.getComment(),postid);
        return new ResponseEntity<>("Comment Added !",HttpStatus.OK);
}

@CrossOrigin
@PostMapping("/set-private/{postid}")
    public ResponseEntity<?>setPrivate(@PathVariable String postid){
        Authentication auth=SecurityContextHolder.getContext().getAuthentication();
        String username=auth.getName();
        try{
            postServices.setPostPrivate(username,postid);
            return new ResponseEntity<>("Updated !",HttpStatus.OK);
        }
        catch (Exception e){
            throw new RuntimeException("Something Went Wrong!");
        }
}


}
