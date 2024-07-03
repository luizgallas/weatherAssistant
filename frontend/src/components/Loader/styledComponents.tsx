import styled, { keyframes } from "styled-components";
import { Colors } from "../../assets/colors";

const wave = keyframes`
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-15px);
  }
`;

export const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Dot = styled.div`
    width: 15px;
    height: 15px;
    margin: 0 5px;
    background-color: ${Colors.loader};
    border-radius: 8px;
    animation: ${wave} 1.2s infinite;
    
    &:nth-child(1) {
        animation-delay: 0s;
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.4s;
    }
`