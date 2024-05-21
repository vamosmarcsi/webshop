package com.marcsi.backend.service;

import com.marcsi.backend.model.Address;

import java.util.List;

public interface AddressService {
    List<Address> getAddresses();
    Address getAddressById(Long id);
    Address createAddress(Address address);
    Address updateAddress(Long id, Address address);
    void deleteAddressById(Long id);
}
