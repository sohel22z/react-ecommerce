import { IProduct } from "../../types";
import client from "../client";
import { PRODUCT, PRODUCTS } from "../endpoints";

export const fetchProducts = async (): Promise<IProduct[]> => {
    try {
        const response = await client.get(PRODUCTS);
        return response.data;
    } catch (error) {
        console.error('Error fetching products', error);
        throw error;
    }
}

export const fetchProductById = async (id:string) => {
    try {
        const response = await client.get(PRODUCT(id));
        return response.data
    } catch (error) {
        console.error('Error fetching product with id ${id}', error);
        throw error
    }
}