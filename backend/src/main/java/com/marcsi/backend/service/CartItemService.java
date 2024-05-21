package com.marcsi.backend.service;

import com.marcsi.backend.model.CartItem;

import java.util.List;

public interface CartItemService {
    List<CartItem> getCartItems();
    CartItem getCartItemById(Long id);
    CartItem createCartItem(CartItem cartItem);
    CartItem updateCartItem(Long id, CartItem cartItem);
    void deleteCartItemById(Long id);
}
