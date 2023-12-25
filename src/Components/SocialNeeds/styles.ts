import styled from "styled-components/native";
import * as Colors from '../../Utils/Colors';

export const SocialContainer = styled.View<{ bgColor: string }>`
    background-color: ${({ bgColor }) => bgColor};
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 25px;
    margin-bottom: 25px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 0px;
    padding-left: 25px;
    text-transform: uppercase;
`;

export const SocialNetwork = styled.View`
    display: flew;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 16px;
    color: ${Colors.razzleDazzleRose};
    text-transform: uppercase;
    padding-left: 2px;
`;

export const Icon = styled.View``;

export const Requirements = styled.View`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

export const SocialEntry = styled.View`
    display: flew;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const TextualContent = styled.View`
    display: flew;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 15px;
`;

export const RequirementsNumber = styled.Text`
    font-size: 21px;
    color: ${Colors.gray};
    font-weight: 700;
`;

export const RequirementsType = styled.Text`
    font-size: 14px;
    color: ${Colors.gray};
    font-weight: 300;
    text-transform: capitalize;

`;