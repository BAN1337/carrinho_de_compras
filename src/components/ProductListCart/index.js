import React, { useState } from "react";
import {
    Container,
    ViewInfos,
    ViewButtons,
    ProductName,
    ProductValue,
    ButtonRemove,
    ViewQuant,
    TextQuant,
    ButtonAdd
} from "./styles";

import Feather from '@expo/vector-icons/Feather';

export default function ProductListCart({ data, addQuant, removeQuant }) {
    const [quant, setQuant] = useState(data?.quant)

    function handleIncrease() {
        addQuant()
        setQuant(item => item + 1)
    }

    function handleDecrease() {
        removeQuant()
        setQuant(item => item - 1)
    }

    return (
        <Container>
            <ViewInfos>
                <ProductName>{data.name}</ProductName>

                <ProductValue>R$ {data.price.toFixed(2)}</ProductValue>
            </ViewInfos>

            <ViewButtons>
                <ButtonRemove onPress={handleDecrease}>
                    <Feather name="minus" size={12} color="black" />
                </ButtonRemove>

                <ViewQuant>
                    <TextQuant>{quant}</TextQuant>
                </ViewQuant>

                <ButtonAdd onPress={handleIncrease}>
                    <Feather name="plus" size={12} color="black" />
                </ButtonAdd>
            </ViewButtons>
        </Container>
    )
}