package com.socialopus.springRest.repository;

import com.socialopus.springRest.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("FROM Order g WHERE g.buyerID = :buyerId")
    List<Order> findByBuyerId(Long buyerId);

}
