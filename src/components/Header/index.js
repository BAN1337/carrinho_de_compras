import React from "react";
import {
    Container,
    Title,
    ButtonCart
} from "./styles";

import Feather from '@expo/vector-icons/Feather';

export default function Header({ title }) {
    return (
        <Container>
            <Title>{title}</Title>

            <ButtonCart>
                <Feather name="shopping-cart" size={24} color="black" />
            </ButtonCart>
        </Container>
    )
}