import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext({})

export default function AppProvider({ children }) {
    const [listProductsAdd, setListProductsAdd] = useState([])
    const [total, setTotal] = useState(0)

    function addProductToCart(product) {
        const result = listProductsAdd.find(item => item.name === product.name)

        if (!result) {
            let newProduct = {
                name: product.name,
                price: product.price,
                quant: 1
            }

            let NewListProductsAdd = [...listProductsAdd, newProduct]

            setListProductsAdd(NewListProductsAdd)
        } else {
            let index = listProductsAdd.indexOf(result)
            listProductsAdd.splice(index, 1, { name: result.name, price: result.price, quant: result.quant + 1 })
            setListProductsAdd(listProductsAdd)
        }
    }

    function sumTotal() {
        let total = 0
        listProductsAdd.forEach((product) => {
            total += (parseFloat(product.quant) * parseFloat(product.price))
        })
        setTotal(total.toFixed(2))
    }



    return (
        <AppContext.Provider value={{ listProductsAdd, setListProductsAdd, addProductToCart, sumTotal, total }}>
            {children}
        </AppContext.Provider>
    )
}