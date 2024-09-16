package com.example.Khudua_Backend.repository;

import com.example.Khudua_Backend.entity.ContactQuery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactQueryRepository extends JpaRepository<ContactQuery,Long> {
}
