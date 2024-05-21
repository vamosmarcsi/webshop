package com.marcsi.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigInteger;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "CART")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private BigInteger total;
    @Column
    private Date createdAt;
    @Column
    private byte ordered;
    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;
}
