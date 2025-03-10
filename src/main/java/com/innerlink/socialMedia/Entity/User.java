package com.innerlink.socialMedia.Entity;

import lombok.NonNull;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;


@Document(collection = "user")
public class User {
    // mongodb use karta hai object id isliye mention kiya
    @Id
    private ObjectId id;
    @Indexed(unique = true)
    @NonNull
    private String username;
    @NonNull
    private String password;
    @NonNull
    private String email;
    private String aboutuser;
    @DBRef
    private List<PostEntries> postEntries = new ArrayList<>();
    private List<String> roles;
    private String userImg;

    public int getPostCount() {
        return postCount;
    }

    public void setPostCount(int postCount) {
        this.postCount = postCount;
    }

    public String getUserImg() {
        return userImg;
    }

    public void setUserImg(String userImg) {
        this.userImg = userImg;
    }

    private int postCount;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public String getAboutuser() {
        return aboutuser;
    }

    public void setAboutuser(String aboutuser) {
        this.aboutuser = aboutuser;
    }


    //getter and setter
    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public List<PostEntries> getPostEntries() {
        return postEntries;
    }

    public void setPostEntries(List<PostEntries> postEntries) {
        this.postEntries = postEntries;
    }


    public List<String> getRoles() {
        return roles;
    }

    public void setRoles(List<String> roles) {
        this.roles = roles;
    }

}
