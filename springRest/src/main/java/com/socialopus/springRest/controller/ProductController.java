package com.socialopus.springRest.controller;

import com.socialopus.springRest.exception.ResourceNotFound;
import com.socialopus.springRest.model.Product;
import com.socialopus.springRest.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/products")

public class ProductController {

    @Autowired
    private ProductRepository productRepository;



    @GetMapping("/")
    public List<Product> getAllProducts(Model model) {

        return this.productRepository.findAll();

    }

    @GetMapping("/{productID}")
    public ResponseEntity<Product> getProductById(@PathVariable(value = "productID") Long productId)
            throws ResourceNotFound {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFound("Product not found for this id :: " + productId));
        return ResponseEntity.ok().body(product);
    }

    @GetMapping("/byseller/{sellerID}")

    public List<Product> getOrdersBySeller(@PathVariable(value = "sellerID") Long sellerId){

        List productList = productRepository.findBySellerId(sellerId);

        return productList;

    }


    @PostMapping("/")
    public Product createProduct(@Valid @RequestBody Product product) {
        return productRepository.save(product);
    }

    @PutMapping("/{productID}")
    public ResponseEntity<Product> updateProduct(@PathVariable(value = "productID") Long productId,
                                             @Valid @RequestBody Product newProduct)
            throws ResourceNotFound {
        Product product = productRepository.findById(productId)
                .orElseThrow(()-> new ResourceNotFound("Product not found for this id :: " + productId));


        product.setTitle(newProduct.getTitle());
        product.setDetails(newProduct.getDetails());
        product.setPrice(newProduct.getPrice());
        product.setImage(newProduct.getImage());


        final Product updatedProduct = productRepository.save(product);


        return ResponseEntity.ok(updatedProduct);

    }


    @DeleteMapping("/{productID}")
    public Map<String, Boolean> deleteProduct(@PathVariable(value = "productID") Long productId)
            throws ResourceNotFound {
        Product product = productRepository.findById(productId)
                .orElseThrow(()-> new ResourceNotFound("Product not found for this id :: " + productId));

        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();

        response.put("deleted product", Boolean.TRUE);

        return response;

    }


}