package com.marcsi.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "ADDRESS")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(nullable = false)
    private String zipCode;
    @Column(nullable = false)
    private String city;
    @Column(nullable = false)
    private int houseNumber;
    @Column
    private String stairs;
    @Column
    private String flat;
    @Column
    private String door;
}
