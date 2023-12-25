import styled from "styled-components/native";
import * as Colors from "../../../Utils/Colors";

export const FormContainer = styled.View`
    padding-top: 0px;
    width: 100%;
`;

export const SwitchContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-top: 20px;
`;

export const SwitchLabel = styled.Text`
    color: ${Colors.silver};
    font-size: 10px;
    padding-left: 5px;
`;