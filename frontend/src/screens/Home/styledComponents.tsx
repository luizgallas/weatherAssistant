import styled from "styled-components";
import { Colors } from "../../assets/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 80vh;
    background-color: ${Colors.frame};
    border-radius: 8px;
    padding: 24px;
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 160px;
`;

export const Title = styled.h1`
    color: ${Colors.text};
    font-size: 24px;
`;

export const Body = styled.body``;

export const InputContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;