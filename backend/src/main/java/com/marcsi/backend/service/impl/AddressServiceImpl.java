package com.marcsi.backend.service.impl;

import com.marcsi.backend.model.Address;
import com.marcsi.backend.repository.AddressRepository;
import com.marcsi.backend.service.AddressService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AddressServiceImpl implements AddressService {
    
    private final AddressRepository addressRepository;

    @Override
    public List<Address> getAddresses() {
        return addressRepository.findAll();
    }

    @Override
    public Address getAddressById(Long id) {
        return addressRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public Address createAddress(Address address) {
        return addressRepository.save(address);
    }

    @Override
    public Address updateAddress(Long id, Address address) {
        Address currentAddress = addressRepository.findById(id).orElseThrow(RuntimeException::new);
        currentAddress.setZipCode(address.getZipCode());
        currentAddress.setCity(address.getCity());
        currentAddress.setHouseNumber(address.getHouseNumber());
        currentAddress.setStairs(address.getStairs());
        currentAddress.setFlat(address.getFlat());
        currentAddress.setDoor(address.getDoor());
        return currentAddress;
    }

    @Override
    public void deleteAddressById(Long id) {
        addressRepository.deleteById(id);
    }
}
