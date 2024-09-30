import React from "react";
import {
    Container,
    ViewContador,
    Contador
} from "./styles";

import Feather from '@expo/vector-icons/Feather';

export default function IconCartWithCounter({ count }) {
    return (
        <Container>
            <Feather name="shopping-cart" size={24} color="black" />
            {count > 0 && (
                <ViewContador>
                    <Contador>{count}</Contador>
                </ViewContador>
            )}
        </Container>
    )
}