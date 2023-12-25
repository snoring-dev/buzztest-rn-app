import styled from "styled-components/native";
import { razzleDazzleRose } from "../../Utils/Colors";

export const LinkWrapper = styled.Pressable`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LinkValue = styled.Text`
    color: ${razzleDazzleRose};
    font-size: 14px;
    text-align: center;
`;