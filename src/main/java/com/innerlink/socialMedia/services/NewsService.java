package com.innerlink.socialMedia.services;

import com.innerlink.socialMedia.Response.Apiresponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

import static jdk.javadoc.doclet.DocletEnvironment.ModuleMode.API;
@Service
public class NewsService {
    private static final String apiKey = "c26f7074a9484ebbabe04d6adfa833e6";
    private static final String apiURIEverything = "https://newsapi.org/v2/top-headlines?country=us&apiKey=API_KEY";

    @Autowired
    private RestTemplate restTemplate;

    public List<Apiresponse.Article> getNews() {
        String finalapi = apiURIEverything.replace("API_KEY", apiKey);
        System.out.println("Final API URL: " + finalapi);  // Debugging

        ResponseEntity<Apiresponse.Root> response = restTemplate.exchange(finalapi, HttpMethod.GET, null, Apiresponse.Root.class);
        Apiresponse.Root body=response.getBody();
        return body.getArticles();
    }
}
