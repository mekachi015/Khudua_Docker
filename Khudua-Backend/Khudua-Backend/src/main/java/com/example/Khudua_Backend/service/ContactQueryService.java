package com.example.Khudua_Backend.service;

import com.example.Khudua_Backend.entity.ContactQuery;

public interface ContactQueryService {

    ContactQuery saveQuery(ContactQuery contactQuery);

    void sendMail(ContactQuery contactQuery);
}
