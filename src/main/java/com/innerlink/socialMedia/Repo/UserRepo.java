package com.innerlink.socialMedia.Repo;

import com.innerlink.socialMedia.Entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User,String>

{
    //ye exist nahi  karta isliye banaya hai
   public User findByUsername(String username);


}
