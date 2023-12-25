import styled from "styled-components/native";
import * as Colors from '../../Utils/Colors';

export const FieldContainer = styled.View`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`;

export const Label = styled.Text`
    color: ${Colors.razzleDazzleRose};
    font-size: 8px;
    text-align: center;
    position: absolute;
    top: 5px;
    z-index: 10;
    margin: auto;
`;

export const Input = styled.TextInput`
    background-color: #fafafa;
    border-radius: 100px;
    height: 42px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-self: center;
    color: ${Colors.mineShaft};
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
`;
