import { Container, Flex, Heading } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import HeaderMain from '../components/layout/header/headerMain';

const ProductPage: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        console.log("Added event listener");
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Cleanup: Removed event listener");
        };
    }, []);

    useEffect(() => {
        if (seconds === 0) return; // Stop timer at 0

        const timer = setInterval(() => {
            setSeconds((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Cleanup: Timer cleared");
        };
    }, [seconds]);

    return (
        <>
            <HeaderMain />

            <Container>
                <h1 style={{color: 'green'}}>Window width: {width}px</h1>
                <h2 style={{color: 'red'}}>Countdown: {seconds}s</h2>
                <Flex justify='center' align='center' height='100vh'>
                    <Heading as='h1' size='6'>Product Details Page!</Heading>
                </Flex>
            </Container>
        </>
    )
}

export default ProductPage;