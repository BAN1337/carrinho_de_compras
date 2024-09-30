import React, { useContext } from "react";
import {
    Container,
    List
} from "./styles";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

import { AppContext } from "../../contexts/app";

export default function Home() {
    const { listProducts } = useContext(AppContext)

    return (
        <Container>
            <Header title='Lista de Produtos' />

            <List
                data={listProducts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductList data={item} />}
            />
        </Container>
    )
}
