import React, { createContext, useState } from "react";

export const CartContext = createContext({})

export default function CartProvider({ children }) {
    const [listProductsAdd, setListProductsAdd] = useState([])
    const [total, setTotal] = useState(0)

    function addProductCart(product) {
        const indexItem = listProductsAdd.findIndex(item => item.id === product.id)

        if (indexItem !== -1) {
            let cartList = listProductsAdd

            cartList[indexItem].quant += 1

            cartList[indexItem].total = cartList[indexItem].quant * cartList[indexItem].price

            setListProductsAdd(cartList)
            sumTotal(cartList)
        } else {
            let newProduct = {
                ...product,
                quant: 1,
                total: product.price
            }

            setListProductsAdd(products => [...products, newProduct])
            sumTotal([...listProductsAdd, newProduct])
        }
    }

    function removeProductCart(product) {
        const indexItem = listProductsAdd.findIndex(item => item.id === product.id)

        let cartList = listProductsAdd

        if (cartList[indexItem]?.quant > 1) {

            cartList[indexItem].quant -= 1

            cartList[indexItem].total -= cartList[indexItem].price

            setListProductsAdd(cartList)
            sumTotal(cartList)
        } else {
            const removeItem = listProductsAdd.filter(item => item.id !== product.id)

            setListProductsAdd(removeItem)
            sumTotal(removeItem)
        }
    }

    function sumTotal(products) {
        let myCart = products

        let result = myCart.reduce((accum, product) => { return accum + product.total }, 0)

        setTotal(result.toFixed(2))
    }

    return (
        <CartContext.Provider
            value={{
                listProductsAdd,
                total,
                addProductCart,
                removeProductCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}