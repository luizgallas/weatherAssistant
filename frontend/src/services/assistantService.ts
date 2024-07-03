import axios from "axios"

export const retrieveWeatherRecommendation = async (city: string, country = ""): Promise<string> => {
    const location = country ? `${city}, ${country}` : city;

    try {
        const { data } = await axios.post("http://localhost:8000/chat", {
            location
        });
    
        return data
    } catch(err) {
        return "Unable to generate weather recommendation."
    }
}