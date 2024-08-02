import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';

const ProductPage: React.FC = () => {
    return (
        <Flex justify='center' align='center' height='100vh'>
            <Heading as='h1' size='6'>Product Details Page!</Heading>
        </Flex>
    )
}

export default ProductPage;