package com.innerlink.socialMedia.services;

import com.innerlink.socialMedia.Entity.User;
import com.innerlink.socialMedia.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User users = userRepo.findByUsername(username);
        if (users != null) {
            return org.springframework.security.core.userdetails.User.builder()
                    .username(users.getUsername())
                    .password(users.getPassword())
                    .build();
        }
        throw new RuntimeException("Something Went Wrong");
    }
}
