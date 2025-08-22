import axios from "axios";
const URL_API = import.meta.env.VITE_URL_API;

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