package com.socialopus.springRest.repository;

import com.socialopus.springRest.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BuyerRepository extends JpaRepository<Buyer, Long> {

    @Query("FROM Buyer g WHERE g.username = :username")
    List<Buyer> findByUsername(String username);
}
