import React, { useContext } from "react";
import {
    Container,
    ViewInfos,
    ViewButton,
    ProductName,
    ProductValue,
    ButtonAdd
} from "./styles";

import Feather from '@expo/vector-icons/Feather';

import { AppContext } from "../../contexts/cart";

export default function ProductList({ data }) {
    const { addProductToCart } = useContext(AppContext)

    return (
        <Container>
            <ViewInfos>
                <ProductName>{data.name}</ProductName>

                <ProductValue>R$ {data.price.toFixed(2)}</ProductValue>
            </ViewInfos>

            <ViewButton>
                <ButtonAdd onPress={() => addProductToCart(data)}>
                    <Feather name="plus" size={12} color="black" />
                </ButtonAdd>
            </ViewButton>
        </Container>
    )
}