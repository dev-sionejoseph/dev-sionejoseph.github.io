package com.socialopus.springRest.controller;

import com.socialopus.springRest.exception.ResourceNotFound;
import com.socialopus.springRest.model.Seller;
import com.socialopus.springRest.repository.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/sellers")

public class SellerController {

    @Autowired
    private SellerRepository sellerRepository;



    @GetMapping("/")
    public List<Seller> getAllSellers(Model model) {

        return this.sellerRepository.findAll();

    }

    @GetMapping("/{sellerID)")
    public ResponseEntity<Seller> getSellerById(@PathVariable(value = "sellerID") Long sellerId)
            throws ResourceNotFound {
        Seller seller = sellerRepository.findById(sellerId)
                .orElseThrow(() -> new ResourceNotFound("Seller not found for this id :: " + sellerId));
        return ResponseEntity.ok().body(seller);
    }


    @PostMapping("/")
    public Seller createSeller(@Valid @RequestBody Seller seller) {
        return sellerRepository.save(seller);
    }

    @PutMapping("/{sellerID}")
    public ResponseEntity<Seller> updateSeller(@PathVariable(value = "sellerID") Long sellerId,
                                                   @Valid @RequestBody Seller newSeller)
            throws ResourceNotFound {
        Seller seller = sellerRepository.findById(sellerId)
                .orElseThrow(()-> new ResourceNotFound("Seller not found for this id :: " + sellerId));


        seller.setEmail(newSeller.getEmail());
        seller.setFirstName(newSeller.getFirstName());
        seller.setLastName(newSeller.getLastName());
        seller.setUsername(newSeller.getUsername());


        final Seller updatedSeller = sellerRepository.save(seller);


        return ResponseEntity.ok(updatedSeller);

    }


    @DeleteMapping("/{sellerID}")
    public Map<String, Boolean> deleteSeller(@PathVariable(value = "sellerID") Long sellerID)
            throws ResourceNotFound {
        Seller seller = sellerRepository.findById(sellerID)
                .orElseThrow(()-> new ResourceNotFound("Seller not found for this id :: " + sellerID));

        sellerRepository.delete(seller);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted seller", Boolean.TRUE);

        return response;

    }


}