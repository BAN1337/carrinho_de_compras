import React from "react";
import {
    Background,
    List
} from "./styles";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";

export default function Home() {
    return (
        <Background>
            <Header title='Lista de Produtos' />

            <List
                data={[]}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ProductList data={item} />}
            />
        </Background>
    )
}
