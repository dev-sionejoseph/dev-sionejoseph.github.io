package com.socialopus.springRest.model;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Id
    @Column(name = "products")
    private String products;

    @Id
    @Column(name = "cost")
    private String cost;

    @Id
    @Column(name = "shipping_address")
    private String shippingAddress;

    @Id
    @Column(name = "buyer_id")
    private String buyerID;

    public Order(){
        super();
    }

    public Order(Long id, String products, String cost, String shippingAddress, String buyerID) {
        super();
        this.products = products;
        this.cost = cost;
        this.shippingAddress = shippingAddress;
        this.buyerID = buyerID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProducts() {
        return products;
    }

    public void setProducts(String products) {
        this.products = products;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }

    public String getBuyerID() {
        return buyerID;
    }

    public void setBuyerID(String buyerID) {
        this.buyerID = buyerID;
    }
}
