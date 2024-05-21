package com.marcsi.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "USER")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String username;
    @ManyToOne
    @JoinColumn(name = "BILLING_ADDRESS")
    private Address billingAddress;
    @ManyToOne
    @JoinColumn(name = "DELIVERY_ADDRESS")
    private Address deliveryAddress;
}
