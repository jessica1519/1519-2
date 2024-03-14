import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const totalPrice = shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
  const shipping = 5.0;
  const totalNormalShipping = totalPrice + shipping;
  const normalShipping = `$${shipping.toFixed(2)}`;
  const totalPriceShipping = `$${totalNormalShipping.toFixed(2)}`;
  function findElement(product) {
    const isItemInCart = shoppingCart.find(
      (item) =>
        item.id === product.id &&
        item.color === product.color &&
        item.gender === product.gender &&
        item.size === product.size
    ); // check if the item is already in the cart
    return isItemInCart;
  }
  const addToCart = (product, quantityToAdd = 1) => {
    if (findElement(product)) {
      setShoppingCart(
        shoppingCart.map(
          (
            item // if the item is already in the cart, increase the quantity of the item
          ) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantityToAdd }
              : item // otherwise, return the cart item
        )
      );
    } else {
      setShoppingCart([
        ...shoppingCart,
        { ...product, quantity: quantityToAdd },
      ]); // if the item is not in the cart, add the item to the cart
    }
  };
  const itemQuantity = (quantityValue, el) => {
    if (findElement(el)) {
      addToCart(el, quantityValue - el.quantity);
    }
  };
  const sum = shoppingCart.reduce(
    (total, amount) => total + amount?.quantity,
    0
  );
  const findItem = (id) => {
    const findIndex = shoppingCart.findIndex((el) => el.id === id);
    console.log(findIndex);
    return findIndex;
  };
  function deleteItem(id) {
    const idToDelete = findItem(id);
    shoppingCart.splice(idToDelete, 1);
    setShoppingCart([...shoppingCart]);
    console.log("el", id);
  }
  return (
    <CartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        itemQuantity,
        sum,
        deleteItem,
        findItem,
        totalPriceShipping,
        formattedTotalPrice,
        normalShipping,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
