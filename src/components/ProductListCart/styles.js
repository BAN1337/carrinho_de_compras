import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    width: 100%;
    height: 100px;
    border: 1px solid #DCDCDC;
    border-radius: 5px;
    margin-top: 15px;
    padding: 10px;
`

export const ViewInfos = styled.View`
    margin-bottom: 15px;
`
export const ViewButtons = styled.View`
    flex-direction: row;
    align-items: center;
`

export const ProductName = styled.Text`
    font-size: 15px;
    font-weight: bold;
`

export const ProductValue = styled.Text`
`

export const ButtonRemove = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    background-color: #1490FE;
    padding: 8px;
`

export const ViewQuant = styled.View`
    align-items: center;
    justify-content: center;
    width: 30px;
`

export const TextQuant = styled.Text`
    font-size: 12px;
`

export const ButtonAdd = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    background-color: #1490FE;
    padding: 8px;
`