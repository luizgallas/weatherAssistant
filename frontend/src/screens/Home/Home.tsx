import { FormEventHandler, useState } from "react"
import { Input } from "../../components/Input/Input"
import { Body, ButtonContainer, Container, Header, InputContainer, Logo, RecommendationContainer, Title } from "./styledComponents"
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCheckWeather = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 8000);
    }

    return (
        <Container>
            <Header>
                <Logo src={require("../../assets/images/Logo.png")}></Logo>
            </Header>
            <Body>
                <Title>Should I go outside today?</Title>
                <form onSubmit={handleCheckWeather}>
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
                        <Button type="submit">Check the weather</Button>
                    </ButtonContainer>
                </form>
                <RecommendationContainer>
                    {isLoading ? <Loader /> : null}
                    
                </RecommendationContainer>
            </Body>
        </Container>
    )
}