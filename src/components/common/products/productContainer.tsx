import React from "react";
import { Button } from "react-bootstrap";
import { IProduct } from "../../../types/productTypes";

interface ProductContainerProps {
    product: IProduct;
}

const ProductContainer: React.FC<ProductContainerProps> = ({product}) => {
    return (
        <>
            <div className="product-container" key={product.id}>
                <div>
                    <img src={`${product.image}`} alt="" />
                    <h6 className="title">{product.title}</h6>
                </div>
                <div className="d-flex flex-sm-row flex-column align-items-sm-center justify-content-between gap-2">
                    <div className="price">
                        {`$ ${product.price}`}
                    </div>
                    <Button className="py-0" size="sm">
                        Add +
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductContainer;