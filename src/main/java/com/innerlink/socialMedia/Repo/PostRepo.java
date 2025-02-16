package com.innerlink.socialMedia.Repo;

import com.innerlink.socialMedia.Entity.PostEntries;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PostRepo extends MongoRepository<PostEntries,String> {

public PostEntries findBypostid(String postid);


}
