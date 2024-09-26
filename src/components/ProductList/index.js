import React from "react";
import {
    Container,
    ViewInfos,
    ViewButton,
    ProductName,
    ProductValue,
    ButtonAdd
} from "./styles";

export default function ProductList({ data }) {
    return (
        <Container>
            <ViewInfos>
                <ProductName></ProductName>

                <ProductValue>R$ </ProductValue>
            </ViewInfos>

            <ViewButton>
                <ButtonAdd>

                </ButtonAdd>
            </ViewButton>
        </Container>
    )
}