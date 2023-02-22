import { createContext } from "react";

const calculateTotalPrice = (cartList)=> {
    return cartList.map(item => item.num * item.price).reduce((a, b) => { return a + b; }, 0);
}

export const cartInit = {cartList:[]}
export const CartContext = createContext({
})

export const cartReducer = (state, action) => {
    const cartList = [...state.cartList];
    const index = cartList.findIndex((item) => item.id === action.payload.id);

    console.log(action);

    switch (action.type) {
        case "ADD_CART":
            if (index === -1) cartList.push(action.payload);
            else {
                if (cartList[index].num < 5)
                    cartList[index].num += action.payload.num;
                else alert("已加入最多5個!");
            }
            return { ...state, cartList, totalPrice: calculateTotalPrice(cartList) };
        case "CHANGE_PRODUCT_NUM":
            cartList[index].num = action.payload.num;
            return { ...state, cartList, totalPrice: calculateTotalPrice(cartList) };
        case "REMOVE_PRODUCT":
            cartList.splice(index, 1);
            return { ...state, cartList, totalPrice: calculateTotalPrice(cartList) };

        default:
            return state;
    }
};