package com.socialopus.springRest.repository;

import com.socialopus.springRest.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BuyerRepository extends JpaRepository<Buyer, Long> {
}
