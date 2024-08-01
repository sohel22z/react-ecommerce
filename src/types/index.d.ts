declare global {

    type IProduct = {
        id: number;
        name: string;
        category: string;
        price: number;
        image: URL;
        title: string;
    }
    
    type IProductCategory = {
        [key: string]: IProduct[];
    }

}

export {IProduct, IProductCategory}