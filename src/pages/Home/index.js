import React, { useState, useContext } from "react";
import {
    Container,
    List
} from "./styles";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { CartContext } from "../../contexts/cart";

export default function Home() {
    const [listProducts, setListProducts] = useState([
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
    ])

    const { listProductsAdd, addProductCart } = useContext(CartContext)

    function handleAddCart(product) {
        addProductCart(product)
    }

    return (
        <Container>
            <Header title='Lista de Produtos' count={listProductsAdd?.length} />

            <List
                data={listProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductList data={item} addToCart={() => handleAddCart(item)} />}
            />
        </Container>
    )
}
