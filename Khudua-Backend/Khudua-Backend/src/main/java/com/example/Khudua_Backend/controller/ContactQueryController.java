package com.example.Khudua_Backend.controller;

import com.example.Khudua_Backend.entity.ContactQuery;
import com.example.Khudua_Backend.service.ContactQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactQueryController {

    @Autowired
    private ContactQueryService contactQueryService;

    //Endpoint to submit contact form
    @PostMapping
    public ResponseEntity<String> submitQuery(@RequestBody ContactQuery contactQuery){
        contactQueryService.saveQuery(contactQuery);

        contactQueryService.sendMail(contactQuery);

        return ResponseEntity.ok("Your query has been submitted successfully");
    }
}
