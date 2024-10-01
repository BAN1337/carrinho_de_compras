import React from "react";
import {
    Container,
    Title,
    ButtonCart
} from "./styles";
import IconCartWithCounter from "../IconCartWithCounter";

import { useNavigation } from "@react-navigation/native";

export default function Header({ title, count }) {
    const navigation = useNavigation()

    return (
        <Container>
            <Title>{title}</Title>

            <ButtonCart onPress={() => navigation.navigate('Cart')}>
                <IconCartWithCounter count={count} />
            </ButtonCart>
        </Container>
    )
}