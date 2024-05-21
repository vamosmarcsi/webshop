package com.marcsi.backend.service.impl;

import com.marcsi.backend.model.CartItem;
import com.marcsi.backend.repository.CartItemRepository;
import com.marcsi.backend.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CartItemServiceImpl implements CartItemService {

    private final CartItemRepository cartItemRepository;

    @Override
    public List<CartItem> getCartItems() {
        return cartItemRepository.findAll();
    }

    @Override
    public CartItem getCartItemById(Long id) {
        return cartItemRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    @Override
    public CartItem updateCartItem(Long id, CartItem cartItem) {
        CartItem currentCartItem = cartItemRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCartItem.setCart(cartItem.getCart());
        currentCartItem.setCategory(cartItem.getCategory());
        currentCartItem.setPrice(cartItem.getPrice());
        currentCartItem.setQuantity(cartItem.getQuantity());
        currentCartItem.setProductName(cartItem.getProductName());
        return currentCartItem;
    }

    @Override
    public void deleteCartItemById(Long id) {
        cartItemRepository.deleteById(id);
    }
}
