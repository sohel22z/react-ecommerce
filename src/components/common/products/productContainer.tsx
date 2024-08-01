import React from "react";
import { IProduct } from '../../../types'
import { Box, Button, Flex } from "@radix-ui/themes";

interface ProductContainerProps {
    product: IProduct;
}

const ProductContainer: React.FC<ProductContainerProps> = ({ product }) => {
    return (
        <>
            <div className="product-container" key={product.id}>
                <div>
                    <img src={`${product.image}`} alt="" />
                    <h6 className="title">{product.title}</h6>
                </div>
                <Flex align='center' justify='between' gap='3'>
                    <Box className='price'>
                        {`$ ${product.price}`}
                    </Box>
                    <Button size={"4"} variant="solid">
                        Add +
                    </Button>
                </Flex>
            </div>
        </>
    )
}

export default ProductContainer;