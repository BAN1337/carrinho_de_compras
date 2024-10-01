import React from "react";
import {
    Container,
    ViewInfos,
    ViewButton,
    ProductName,
    ProductValue,
    ButtonAdd
} from "./styles";

import Feather from '@expo/vector-icons/Feather';

export default function ProductList({ data, addToCart }) {
    return (
        <Container>
            <ViewInfos>
                <ProductName>{data.name}</ProductName>

                <ProductValue>R$ {data.price.toFixed(2)}</ProductValue>
            </ViewInfos>

            <ViewButton>
                <ButtonAdd onPress={addToCart}>
                    <Feather name="plus" size={12} color="black" />
                </ButtonAdd>
            </ViewButton>
        </Container>
    )
}