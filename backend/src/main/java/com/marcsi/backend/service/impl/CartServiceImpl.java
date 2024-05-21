package com.marcsi.backend.service.impl;

import com.marcsi.backend.model.Cart;
import com.marcsi.backend.model.CartItem;
import com.marcsi.backend.repository.CartItemRepository;
import com.marcsi.backend.repository.CartRepository;
import com.marcsi.backend.service.CartService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;
    
    @Override
    public List<Cart> getCarts() {
        return cartRepository.findAll();
    }

    @Override
    public Cart getCartById(Long id) {
        return cartRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @Override
    public CartItem addCartItem(Long cartId, CartItem cartItem) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(RuntimeException::new);
        cartItem.setCart(cart);
        return cartItemRepository.save(cartItem);
    }

    @Override
    public Cart getCartByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    @Override
    public Cart createCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Cart updateCart(Long id, Cart cart) {
        Cart currentCart = cartRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCart.setCreatedAt(cart.getCreatedAt());
        currentCart.setUser(cart.getUser());
        currentCart.setTotal(cart.getTotal());
        currentCart.setOrdered(cart.getOrdered());
        return currentCart;
    }

    @Override
    public void deleteCartById(Long id) {
        cartRepository.deleteById(id);
    }
}
