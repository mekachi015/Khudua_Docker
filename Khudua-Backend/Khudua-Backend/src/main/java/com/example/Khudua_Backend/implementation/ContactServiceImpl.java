package com.example.Khudua_Backend.implementation;

import com.example.Khudua_Backend.entity.ContactQuery;
import com.example.Khudua_Backend.repository.ContactQueryRepository;
import com.example.Khudua_Backend.service.ContactQueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactQueryService {

    @Autowired
    private ContactQueryRepository contactQueryRepository;

    @Autowired
    private JavaMailSender mailSender;

    @Override
    public ContactQuery saveQuery (ContactQuery contactQuery)
    {
        return contactQueryRepository.save(contactQuery);
    }

    @Override
    public void sendMail(ContactQuery contactQuery) {
        // Send email to admin (yourself)
        SimpleMailMessage adminMessage = new SimpleMailMessage();
        adminMessage.setTo("your-email@example.com");
        adminMessage.setSubject("New Query from " + contactQuery.getName() + " " + contactQuery.getLastName());
        adminMessage.setText("User Details:\n" +
                "Name: " + contactQuery.getName() + "\n" +
                "Last Name: " + contactQuery.getLastName() + "\n" +
                "Email: " + contactQuery.getEmail() + "\n" +
                "Phone Number: " + contactQuery.getCellphone() + "\n\n" +
                "Query:\n" + contactQuery.getQuery());
        mailSender.send(adminMessage);

        // Send confirmation email to user
        SimpleMailMessage userMessage = new SimpleMailMessage();
        userMessage.setTo(contactQuery.getEmail());
        userMessage.setSubject("Confirmation: Query Received");
        userMessage.setText("Dear " + contactQuery.getName() + ",\n\nThank you for contacting us. We have received your query and will get back to you shortly.\n\nBest regards,\nKhudua PYT LTD");
        mailSender.send(userMessage);
    }
    }


