import React, { useState, useContext } from "react";
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

import { AppContext } from "../../contexts/app";

export default function ProductListCart({ data }) {
    const [quant, setQuant] = useState(data.quant)

    const { sumTotal, listProductsAdd, setListProductsAdd } = useContext(AppContext)

    function sumProductOnCart() {
        data.quant += 1
        setQuant(quant + 1)
        sumTotal()
    }

    function remProductOnCart() {
        if (data.quant > 1) {
            data.quant -= 1
            setQuant(quant - 1)
            sumTotal()
        } else {
            let index = listProductsAdd.indexOf(data)
            setListProductsAdd([...listProductsAdd.slice(0, index), ...listProductsAdd.slice(index + 1, listProductsAdd.length)])
        }
    }

    return (
        <Container>
            <ViewInfos>
                <ProductName>{data.name}</ProductName>

                <ProductValue>R$ {data.price.toFixed(2)}</ProductValue>
            </ViewInfos>

            <ViewButtons>
                <ButtonRemove onPress={remProductOnCart}>
                    <Feather name="minus" size={12} color="black" />
                </ButtonRemove>

                <ViewQuant>
                    <TextQuant>{quant}</TextQuant>
                </ViewQuant>

                <ButtonAdd onPress={sumProductOnCart}>
                    <Feather name="plus" size={12} color="black" />
                </ButtonAdd>
            </ViewButtons>
        </Container>
    )
}