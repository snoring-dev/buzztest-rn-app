import styled, { css } from 'styled-components/native'
import * as Colors from '../../../Utils/Colors'

export const Container = styled.View`
    background-color: ${Colors.alabaster};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
    padding-left: 8%;
    padding-right: 8%;
    position: relative;
`;

export const GirlIconContainer = styled.View`
    position: absolute;
    top: 10px;
    right: 0px;
`;

export const FormContainer = styled.View`
    padding-top: 0px;
    width: 100%;
`;

export const HeadingLabel = styled.Text`
    color: ${Colors.silver};
    font-size: 9px;
    padding-right: 10%;
    margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    margin-top: 50px;
    position: absolute;
    bottom: 100px;
`;

export const SelectItemContainer = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-bottom: 25px;
`;

export const SelectIcon = styled.View`
    width: 21px;
    height: 21px;
`;

export const SelectLabel = styled.Text<{ isSelected?: boolean }>`
    color: ${Colors.silver};
    font-size: 16px;
    padding-left: 15px;
    ${({ isSelected = false }) => isSelected && css`
        color: ${Colors.razzleDazzleRose};
    `}
`;

export const CategoriesList = styled.ScrollView`
    max-height: 400px;
`;
