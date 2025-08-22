import axios from "axios";
const URL_API = "https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot/";

export const getAllCards = async () => {
    try {
        const response = await axios.get(URL_API);
        return response.data;
    } catch (error) {
        console.log(error + ">> error en Services");
    }
}

export const getCardById = async (id) => {
    try {
        const response = await axios.get(URL_API + id);
        return response.data;
    } catch (error) {
        console.log(error + ">> error en Services");
    }
}