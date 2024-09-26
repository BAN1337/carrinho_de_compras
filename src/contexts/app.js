import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext({})

export default function AppProvider({ children }) {
    const [listProducts, setListProducts] = useState([])

    useEffect(() => {
        function loadProducts() {
            setListProducts(
                [
                    {
                        id: '1',
                        name: 'Coca-Cola',
                        price: 19.90
                    },
                    {
                        id: '2',
                        name: 'Chocolate',
                        price: 6.50
                    },
                    {
                        id: '3',
                        name: 'Queijo 500g',
                        price: 15.00
                    },
                    {
                        id: '4',
                        name: 'Batata Frita',
                        price: 23.90
                    },
                    {
                        id: '5',
                        name: 'Guarana Lata',
                        price: 6.00
                    }
                ]
            )
        }

        loadProducts()
    }, [])

    return (
        <AppContext.Provider value={{ listProducts }}>
            {children}
        </AppContext.Provider>
    )
}