package com.innerlink.InnerLink.healthCheck;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class heathCheck {
    @GetMapping("/health-check")
    public String heathCheck(){
        return "Working and Now Updated!";
    }

}
