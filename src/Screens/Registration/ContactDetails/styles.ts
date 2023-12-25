import styled from 'styled-components/native'
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
    padding-top: 100px;
    width: 100%;
`;

export const CGULabel = styled.Text`
    color: ${Colors.silver};
    font-size: 9px;
`;

export const ButtonContainer = styled.View`
    width: 100%;
    margin-top: 50px;
    position: absolute;
    bottom: 100px;
`;
