import React, { useContext, useState, useEffect } from "react";
import {
    Background,
    Container,
    Text,
    List,
    Total
} from "./styles";

import { AppContext } from "../../contexts/cart";

import ProductListCart from "../../components/ProductListCart";

export default function Cart() {
    const { listProductsAdd, total, sumTotal } = useContext(AppContext)

    useEffect(() => {
        sumTotal()
    }, [listProductsAdd])

    return (
        <Background>
            <Container>
                {listProductsAdd.length === 0 ? (
                    <Text>Nenhum item no carrinho...</Text>
                ) : (
                    <List
                        data={listProductsAdd}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => <ProductListCart data={item} />}
                    />
                )}

                <Total>Total: R$ {total}</Total>
            </Container>
        </Background>
    )
}