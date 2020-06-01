package com.socialopus.springRest.repository;

import com.socialopus.springRest.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SellerRepository extends JpaRepository<Seller, Long> {

    @Query("FROM Seller g WHERE g.username = :username")
    List<Seller> findByUsername(String username);
}
