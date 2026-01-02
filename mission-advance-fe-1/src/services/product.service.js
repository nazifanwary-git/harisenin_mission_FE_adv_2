import axios from "axios";

const API_url = "https://6957e903f7ea690182d3754f.mockapi.io/api/product-list/products";

export const getProducts = () => {
    return axios.get(API_url);
}