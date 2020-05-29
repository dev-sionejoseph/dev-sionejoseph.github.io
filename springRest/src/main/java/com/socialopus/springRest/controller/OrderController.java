package com.socialopus.springRest.controller;

import com.socialopus.springRest.exception.ResourceNotFound;
import com.socialopus.springRest.model.Order;
import com.socialopus.springRest.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/orders")

public class OrderController {

    @Autowired
    private OrderRepository orderRepository;



    @GetMapping("/")
    public List<Order> getAllOrders(Model model) {

        return this.orderRepository.findAll();

    }

    @GetMapping("bybuyer/{buyerID}")

    public List<Order> getOrdersByBuyer(@PathVariable(value = "buyerID") Long buyerId){

        List orderList = orderRepository.findByBuyerId(buyerId);

        return orderList;

    }

    @GetMapping("/{orderID}")
    public ResponseEntity<Order> getOrderById(@PathVariable(value = "orderID") Long orderId)
            throws ResourceNotFound {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFound("Order not found for this id :: " + orderId));
        return ResponseEntity.ok().body(order);
    }


    @PostMapping("/")
    public Order createOrder(@Valid @RequestBody Order order) {
        return orderRepository.save(order);
    }

    @PutMapping("/{orderID}")
    public ResponseEntity<Order> updateOrder(@PathVariable(value = "orderID") Long orderId,
                                             @Valid @RequestBody Order newOrder)
            throws ResourceNotFound {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(()-> new ResourceNotFound("Buyer not found for this id :: " + orderId));


        order.setProducts(newOrder.getProducts());
        order.setCost(newOrder.getCost());
        order.setShippingAddress(newOrder.getShippingAddress());


        final Order updatedOrder = orderRepository.save(order);


        return ResponseEntity.ok(updatedOrder);

    }


    @DeleteMapping("/{orderID}")
    public Map<String, Boolean> deleteOrder(@PathVariable(value = "orderID") Long orderId)
            throws ResourceNotFound {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(()-> new ResourceNotFound("Order not found for this id :: " + orderId));

        orderRepository.delete(order);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted order", Boolean.TRUE);

        return response;

    }


}