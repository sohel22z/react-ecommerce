import { Flex, Heading } from '@radix-ui/themes';
import React from 'react'
import HeaderMain from '../components/layout/header/headerMain';

const CartPage: React.FC = () => {
    return (
        <>
            <HeaderMain />
            <Flex justify='center' align='center' height='100vh'>
                <Heading as='h1' size='6'>Your cart is empty!</Heading>
            </Flex>
        </>
    )
}

export default CartPage;