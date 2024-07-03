import { useState } from "react"
import { Input } from "../../components/Input/Input"
import { Body, ButtonContainer, Container, Header, InputContainer, Logo, RecommendationContainer, RecommendationText, Title } from "./styledComponents"
import { Button } from "../../components/Button/Button";
import { Loader } from "../../components/Loader/Loader";
import LogoSvg from '../../assets/images/Logo.svg'
import { retrieveWeatherRecommendation } from "../../services/assistantService";


export const Home = () => {
    const [city, setCity] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [weatherRecommendation, setWeatherRecommendation] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleCheckWeather = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setWeatherRecommendation("");
        setIsLoading(true);

        const response = await retrieveWeatherRecommendation(city, country);
        setWeatherRecommendation(response);
        setIsLoading(false);
    }

    return (
        <Container>
            <Header>
                <Logo src={LogoSvg} />
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
                <RecommendationContainer $isLoading={isLoading}>
                    {isLoading ? <Loader /> : null}
                    {weatherRecommendation 
                        ? <RecommendationText>{weatherRecommendation}</RecommendationText> 
                        : null}
                </RecommendationContainer>
            </Body>
        </Container>
    )
}