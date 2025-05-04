import axios from "axios";

const API_URL = "http://localhost:3310/api/v1/question/ask";

export const fetchChatResponse = async (question) => {
    try {
        const response = await axios.post(API_URL, { question });
        return response.data;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
}