package com.socialopus.springRest.controller;

import com.socialopus.springRest.exception.ResourceNotFound;
import com.socialopus.springRest.model.Buyer;
import com.socialopus.springRest.repository.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/buyers")

public class BuyerController {

    @Autowired
    private BuyerRepository buyerRepository;



    @GetMapping("/")
    public List<Buyer> getAllBuyers(Model model) {

        return this.buyerRepository.findAll();

    }

    @GetMapping("/{buyerID}")
    public ResponseEntity<Buyer> getBuyerById(@PathVariable(value = "buyerID") Long buyerId)
            throws ResourceNotFound {
        Buyer buyer = buyerRepository.findById(buyerId)
                .orElseThrow(() -> new ResourceNotFound("Buyer not found for this id :: " + buyerId));
        return ResponseEntity.ok().body(buyer);
    }

    @GetMapping("/auth/{username}")

    public List<Buyer> getBuyerByUsername(@PathVariable(value = "username") String username){

        List buyer = buyerRepository.findByUsername(username);

        return buyer;

    }

    @PostMapping("/")
    public Buyer createBuyer(@Valid @RequestBody Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @PutMapping("/{buyerID}")
    public ResponseEntity<Buyer> updateBuyer(@PathVariable(value = "buyerID") Long buyerId,
                                               @Valid @RequestBody Buyer newBuyer)
            throws ResourceNotFound {
        Buyer buyer = buyerRepository.findById(buyerId)
                .orElseThrow(()-> new ResourceNotFound("Buyer not found for this id :: " + buyerId));


        buyer.setEmail(newBuyer.getEmail());
        buyer.setFirstName(newBuyer.getFirstName());
        buyer.setLastName(newBuyer.getLastName());
        buyer.setUsername(newBuyer.getUsername());
        buyer.setPassword(newBuyer.getPassword());


        final Buyer updatedBuyer = buyerRepository.save(buyer);


        return ResponseEntity.ok(updatedBuyer);

    }


    @DeleteMapping("/{buyerID}")
    public Map<String, Boolean> deleteBuyer(@PathVariable(value = "buyerID") Long buyerId)
            throws ResourceNotFound {
        Buyer buyer = buyerRepository.findById(buyerId)
                .orElseThrow(()-> new ResourceNotFound("Buyer not found for this id :: " + buyerId));

        buyerRepository.delete(buyer);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted buyer", Boolean.TRUE);

        return response;

    }


}