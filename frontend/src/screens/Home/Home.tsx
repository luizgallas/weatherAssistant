import { useState } from "react"
import { Input } from "../../components/Input/Input"
import { Body, ButtonContainer, Container, Header, InputContainer, Logo, Title } from "./styledComponents"
import { Button } from "../../components/Button/Button";

export const Home = () => {
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");

    return (
        <Container>
            <Header>
                <Logo src={require("../../assets/images/Logo.png")}></Logo>
            </Header>
            <Body>
                <Title>Should I go outside today?</Title>
                <InputContainer>
                    <Input 
                        value={city} 
                        onChange={(ev) => setCity(ev.target.value)} 
                        placeholder="City" 
                        required 
                    />
                    <Input 
                        value={country}
                        onChange={ev => setCountry(ev.target.value)}
                        placeholder="Country/State" 
                    />
                </InputContainer>
                <ButtonContainer>
                    <Button>Check the weather</Button>
                </ButtonContainer>
            </Body>
        </Container>
    )
}