import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartProduct, SetcartProduct] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    SetcartProduct((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("cartProduct----", cartProduct);
  };
  const removeFromCart = (itemId) => {
    SetcartProduct((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    console.log("cartProduct: ", cartProduct);
    // let total = 0
    let totalAmount = 0;
    // Object.keys(cartProduct).forEach((item) => {
    //   if (cartProduct[item] > 0) {
    //     const itemInfo = all_product.find((product) => product.id === Number(item))
    //     console.log('iteminfo: ', itemInfo)
    //     totalAmount += itemInfo.new_price * cartProduct[item]
    //   }
    //   // total = totalAmount
    // })
    // console.log(totalAmount)
    // return totalAmount
    for (const item in cartProduct) {
      console.log("herrrrrrrr", item);
      if (cartProduct[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        console.log("itemInfo", itemInfo);
        totalAmount += itemInfo.new_price * cartProduct[item];
      }
      console.log("totalAmount", totalAmount);
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartProduct) {
      if (cartProduct[item] > 0) {
        totalItem += cartProduct[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartProduct,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
