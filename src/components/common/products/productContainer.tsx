import { Box, Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { IProduct } from '../../../types';

interface ProductContainerProps {
    product: IProduct;
}

const ProductContainer: React.FC<ProductContainerProps> = ({ product }) => {

    return (
        <Box className="product-container" key={product.id}>
            <div>
                <img src={`${product.image}`} alt="" />
                <Text as="span" size='3' className="title" >{product.title}</Text>
            </div>
            <Flex align='center' justify='between' gap='1'>
                <Box className='price'>
                    {`$ ${product.price}`}
                </Box>
                <Button 
                    size={"2"} 
                    variant="outline"
                >
                    Add +
                </Button>
            </Flex>
        </Box>
    )
}

export default ProductContainer;