import { Box, Container, Text } from '@radix-ui/themes';
import React from 'react';

const HeaderMain: React.FC = () => {
    return (
        <>
            <Box>
                <Container>
                    <Text>Home</Text>
                    <Text>About</Text>
                </Container>
            </Box>
        </>
    )
}

export default HeaderMain;