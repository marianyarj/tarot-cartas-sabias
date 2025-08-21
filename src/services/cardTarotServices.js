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

/*export const getOneCardRandom = async () => {
    try {
        const response = await axios.get(URL_API);
        const cards = response.data;
        const randomCard = Math.floor(Math.random() * cards.length);
        return cards[randomCard];

    } catch (error) {
        console.log(error + ">> error en Services Random");
    }
}

export const getAllCardsRandom = async () => {
    try {
        const response = await axios.get(URL_API);
        const cards = response.data.slice();
        for (let i = 0; i < cards.length; i++) {
            const j = Math.floor(Math.random() * cards.length);
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    } catch (error) {
        console.log(error + ">> error en Sercices Random")
    }
}*/