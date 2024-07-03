import styled, { css } from "styled-components";
import { Colors } from "../../assets/colors";

interface RecommendationContainerProps {
    $isLoading: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60vw;
    min-height: 80vh;
    background-color: ${Colors.frame};
    border-radius: 8px;
    padding: 24px;

    box-shadow: 10px 10px 10px 5px rgba(0,0,0,0.25);
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
`;

export const Logo = styled.img`
    width: 30vw;
    margin-bottom: 40px;

    @media (min-width: 1200px) {
        width: 15vw;
    }

    @media (max-width: 480px) {
        width: 40vw;
    }
`;

export const Title = styled.h1`
    color: ${Colors.text};
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Body = styled.main``;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

export const RecommendationContainer = styled.div<RecommendationContainerProps>`
    display: flex;
    margin-top: 10vh;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    min-height: 20vh;
    border-radius: 8px;
    background-color: ${Colors.background};

    ${({$isLoading}) => $isLoading && css`
        align-items: center;
        justify-content: center;
    `}
`;

export const RecommendationText = styled.p`
    color: ${Colors.text};
    margin: 24px;
`