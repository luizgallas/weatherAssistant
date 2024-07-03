import styled from "styled-components";
import { Colors } from "../../assets/colors";

export const Input = styled.input`
    width: 40vw;
    height: 30px;
    border-radius: 8px;
    padding: 8px 12px;

    &:focus {
        border-color: ${Colors.inputBorder};
        outline: none;
    }
`