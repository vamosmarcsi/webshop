package com.marcsi.backend.service;

import com.marcsi.backend.model.Cart;
import com.marcsi.backend.model.CartItem;

import java.util.List;

public interface CartService {
    List<Cart> getCarts();
    Cart getCartById(Long id);
    CartItem addCartItem(Long cartId, CartItem cartItem);
    Cart getCartByUserId(Long id);
    Cart createCart(Cart cart);
    Cart updateCart(Long id, Cart cart);
    void deleteCartById(Long id);
}
