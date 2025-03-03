import { Flex, Heading } from '@radix-ui/themes';
import React from 'react';
import HeaderMain from '../components/layout/header/headerMain';

const ProductPage: React.FC = () => {
    return (
        <>
        <HeaderMain />
            <Flex justify='center' align='center' height='100vh'>
                <Heading as='h1' size='6'>Product Details Page!</Heading>
            </Flex>
        </>
    )
}

export default ProductPage;