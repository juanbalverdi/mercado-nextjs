import React from 'react';
import {
    Box,
    ChakraProvider,
    Container,
    Divider,
    Heading,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { AppProps } from 'next/app';
import theme from '../theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Box padding={4}>
                <Container
                    backgroundColor={'white'}
                    borderRadius='sm'
                    boxShadow='md'
                    maxWidth='container.xl'
                    padding={4}
                >
                    <VStack marginBottom={6}>
                        <Image
                            borderRadius={9999}
                            src='https://res.cloudinary.com/dxhroyz3b/image/upload/v1676139508/mercado/logo_cvij9f.png'
                        ></Image>
                        <Heading>Mercado</Heading>
                        <Text>Productos Naturales</Text>
                    </VStack>
                    <Divider marginY={6} />
                    <Component {...pageProps} />
                </Container>
            </Box>
        </ChakraProvider>
    );
};

export default App;
