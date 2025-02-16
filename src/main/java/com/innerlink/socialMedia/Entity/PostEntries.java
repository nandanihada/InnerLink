package com.innerlink.socialMedia.Entity;



//inki help se getter setter khud ban jayenge

import lombok.NonNull;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "Post")
public class PostEntries {
    @Id
    private ObjectId id;
    private  String postid;
    private String title;
    private String postImage;
    private  String caption;
    private List<String> likedBy;
    private int likes;

    public boolean isPrivate() {
        return isPrivate;
    }

    public void setPrivate(boolean aPrivate) {
        isPrivate = aPrivate;
    }

    private boolean isPrivate;
    private List<String>comments;

    public ObjectId getId() {
        return id;
    }

    public List<String> getLikedBy() {
        return likedBy;
    }

    public void setLikedBy(List<String> likedBy) {
        this.likedBy = likedBy;
    }



    public @NonNull String getPostid() {
        return postid;
    }

    public void setPostid(@NonNull String postid) {
        this.postid = postid;
    }



    public void setId(ObjectId id) {
        this.id = id;
    }

    public List<String> getComments() {
        return comments;
    }

    public String getPostImage() {
        return postImage;
    }

    public void setPostImage(String postImage) {
        this.postImage = postImage;
    }

    public void setComments(List<String> comments) {
        this.comments = comments;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }




}
