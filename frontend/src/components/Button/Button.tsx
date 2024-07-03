import styled from "styled-components";
import { Colors } from "../../assets/colors";

export const Button = styled.button`
    width: 40vw;
    height: 40px;
    border: none;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${Colors.background};
    color: ${Colors.text};
    font-weight: bold;

    &:focus {
        outline-color: ${Colors.inputBorder};
    }

    &:hover {
        cursor: pointer;
    }
`;