package com.marcsi.backend.controller;

import com.marcsi.backend.model.CartItem;
import com.marcsi.backend.service.CartItemService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/cartItems")
@CrossOrigin(origins = "http://localhost:3000")
public class CartItemController {
    @Autowired
    private final CartItemService cartItemService;

    @GetMapping
    public List<CartItem> getCartItems() {
        return cartItemService.getCartItems();
    }

    @GetMapping("/{id}")
    public CartItem getCartItem(@PathVariable Long id) {
        return cartItemService.getCartItemById(id);
    }

    @PostMapping
    public CartItem createCartItem(@RequestBody CartItem cartItem) {
        return cartItemService.createCartItem(cartItem);
    }

    @PutMapping("/{id}")
    public CartItem updateCartItem(@PathVariable Long id, @RequestBody CartItem cartItem) {
        return cartItemService.updateCartItem(id, cartItem);
    }

    @DeleteMapping("/{id}")
    public void deleteCartItem(@PathVariable Long id) {
        cartItemService.deleteCartItemById(id);
    }
}
