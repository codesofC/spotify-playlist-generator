'use client'

import styled from "styled-components";
import { PRIMARY_COLOR, WHITE_COLOR } from "../data/constants";


interface ButtonProps {
    disable?: boolean;
    outline?: boolean;
}

const Button = styled.button<ButtonProps>`
    background-color: ${(props)=> {
        if(props.outline){
            return 'transparent'
        }

        return PRIMARY_COLOR
    }};
    border: 1px solid ${(props) => props.outline ? PRIMARY_COLOR : 'transparent'};
    color: ${(props) => props.outline ? PRIMARY_COLOR : WHITE_COLOR};
    padding: 4px 8px;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 5px;
    transition: all .3s ease-in-out;
    &:hover{
        color: ${(props) => props.outline ? WHITE_COLOR : PRIMARY_COLOR};
        background-color: ${(props) => props.outline ? PRIMARY_COLOR : WHITE_COLOR};
    }
`;

export { Button }