import React, { useContext } from "react";
import {
    Container,
    Text,
    List,
    Total
} from "./styles";

import { CartContext } from "../../contexts/cart";

import ProductListCart from "../../components/ProductListCart";

export default function Cart() {
    const { listProductsAdd, total, addProductCart, removeProductCart } = useContext(CartContext)

    return (
        <Container>
            <List
                data={listProductsAdd}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
                renderItem={({ item }) => (
                    <ProductListCart
                        data={item}
                        addQuant={() => addProductCart(item)}
                        removeQuant={() => removeProductCart(item)}
                    />
                )}
                ListFooterComponent={() => <Total>Total: R$ {total}</Total>}
            />
        </Container>
    )
}