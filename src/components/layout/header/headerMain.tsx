import { Container, Flex, Heading, Link } from '@radix-ui/themes';
import React from 'react';

const HeaderMain: React.FC = () => {
    return (
        <>
            <Container mt='3'>
                <Flex direction='row' gapX='15px' my='15px'>
                    <Link href='/' size='4'>Home</Link>
                    <Link href='product-details' size='4'>Products</Link>
                    <Link href='cart' size='4'>Cart</Link>
                </Flex>
                <Heading as='h6' size='8'>{`Welcome, John!`}</Heading>
            </Container>
        </>
    )
}

export default HeaderMain;