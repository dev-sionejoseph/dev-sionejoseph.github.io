package com.socialopus.springRest.repository;

import com.socialopus.springRest.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
