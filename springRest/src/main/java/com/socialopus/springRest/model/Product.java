package com.socialopus.springRest.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Id
    @Column(name = "title")
    private String title;

    @Id
    @Column(name = "details")
    private String details;

    @Id
    @Column(name = "price")
    private String price;

    @Id
    @Column(name = "image")
    private String image;

    @Id
    @Column(name = "seller_id")
    private String sellerID;

    public Product(){
        super();
    }

    public Product(String title, String details, String price, String image, String sellerID) {
        super();
        this.title = title;
        this.details = details;
        this.price = price;
        this.image = image;
        this.sellerID = sellerID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getSellerID() {
        return sellerID;
    }

    public void setSellerID(String sellerID) {
        this.sellerID = sellerID;
    }
}
