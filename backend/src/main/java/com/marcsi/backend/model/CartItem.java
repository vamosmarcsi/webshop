package com.marcsi.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "CART_ITEM")
public class CartItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String productName;
    @Column
    private String category;
    @Column(nullable = false)
    private int quantity;
    @Column
    private int price;
    @ManyToOne
    @JoinColumn(name = "CART_ID", nullable = false)
    private Cart cart;
}
