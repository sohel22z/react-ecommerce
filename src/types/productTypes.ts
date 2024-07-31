export type IProduct = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: URL;
    title: string;
}

export type IProductCategory = {
    [key: string]: IProduct[];
}