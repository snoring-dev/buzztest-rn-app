import { rgba } from "polished";
import styled from "styled-components/native";
import { oysterBay, razzleDazzleRose } from "../../Utils/Colors";

export const MessageContainer = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${oysterBay};
    border: 0.5px solid ${rgba(razzleDazzleRose, 0.3)};
    border-radius: 3px;
    margin-top: 5px;
    margin-bottom: 15px;
    padding: 10px;
    color: black;
`;

export const IconContainer = styled.View`
    margin-bottom: 5px;
`;

export const MessageTitle = styled.Text`
    color: black;
    font-size: 16px;
    text-transform: capitalize;
`;

export const MessageContent = styled.Text`
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    text-align: center;
    padding-top: 8px;
`;