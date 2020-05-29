package com.socialopus.springRest.model;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "details")
    private String details;

    @Column(name = "price")
    private String price;

    @Column(name = "image")
    private String image;

    @Column(name = "seller_id")
    private Long sellerID;

    public Product(){
        super();
    }

    public Product(String title, String details, String price, String image, Long sellerID) {
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

    public Long getSellerID() {
        return sellerID;
    }

    public void setSellerID(Long sellerID) {
        this.sellerID = sellerID;
    }
}
