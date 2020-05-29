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
@RequestMapping("/social_opus")

public class BuyerController {

    @Autowired
    private BuyerRepository buyerRepository;



    @GetMapping("/buyers")
    public List<Buyer> getAllBuyers(Model model) {

        return this.buyerRepository.findAll();

    }

    @GetMapping("/buyers/{buyerID)")
    public ResponseEntity<Buyer> getBuyerById(@PathVariable(value = "buyerID") Long buyerId)
            throws ResourceNotFound {
        Buyer buyer = buyerRepository.findById(buyerId)
                .orElseThrow(() -> new ResourceNotFound("Buyer not found for this id :: " + buyerId));
        return ResponseEntity.ok().body(buyer);
    }


    @PostMapping("/buyers")
    public Buyer createBuyer(@Valid @RequestBody Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @PutMapping("/buyers/{buyerID)")
    public ResponseEntity<Buyer> updateBuyer(@PathVariable(value = "buyerID") Long buyerId,
                                               @Valid @RequestBody Buyer newBuyer)
            throws ResourceNotFound {
        Buyer buyer = buyerRepository.findById(buyerId)
                .orElseThrow(()-> new ResourceNotFound("Buyer not found for this id :: " + buyerId));


        buyer.setEmail(newBuyer.getEmail());
        buyer.setFirstName(newBuyer.getFirstName());
        buyer.setLastName(newBuyer.getLastName());
        buyer.setUsername(newBuyer.getUsername());


        final Buyer updatedBuyer = buyerRepository.save(buyer);


        return ResponseEntity.ok(updatedBuyer);

    }


    @DeleteMapping("/buyers/{buyerID)")
    public Map<String, Boolean> deleteSeller(@PathVariable(value = "buyerID") Long buyerId)
            throws ResourceNotFound {
        Buyer buyer = buyerRepository.findById(buyerId)
                .orElseThrow(()-> new ResourceNotFound("Buyer not found for this id :: " + buyerId));

        buyerRepository.delete(buyer);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted buyer", Boolean.TRUE);

        return response;

    }


}