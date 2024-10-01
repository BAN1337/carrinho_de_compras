import React, { useContext } from "react";
import {
    Container,
    Title,
    ButtonCart
} from "./styles";
import IconCartWithCounter from "../IconCartWithCounter";

import { AppContext } from "../../contexts/cart";

import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
    const navigation = useNavigation()

    const { listProductsAdd } = useContext(AppContext)

    return (
        <Container>
            <Title>{title}</Title>

            <ButtonCart onPress={() => navigation.navigate('Cart')}>
                <IconCartWithCounter count={listProductsAdd.length} />
            </ButtonCart>
        </Container>
    )
}