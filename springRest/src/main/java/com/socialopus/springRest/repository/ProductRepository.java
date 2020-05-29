package com.socialopus.springRest.repository;

import com.socialopus.springRest.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("FROM Product g WHERE g.sellerID = :sellerId")
    List<Product> findBySellerId(Long sellerId);
}
