package com.innerlink.socialMedia.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration

public class corsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000","https://inner-link.vercel.app")
                .allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);

    }
}

//@Configuration
//public class corsConfig {
//    @Bean
//    public WebMvcConfigurer corsConfigurer() {
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                registry.addMapping("/**") // Sab endpoints ke liye
//                        .allowedOrigins("http://localhost:3000", "http://192.168.1.116:3000","https://inner-link.vercel.app/") // Allow frontend origin
//                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed methods
//                        .allowedHeaders("*") // Sab headers allow karo
//                        .allowCredentials(true); // Cookies aur authentication allow karo
//            }
//        };
//    }
//}



