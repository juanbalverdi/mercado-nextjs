import React from 'react';
import clientPromise from '../lib/mongodb';
import { GetStaticProps } from 'next';
import { Product } from '../product/types';
import { Button, Flex, Grid, Image, Link, Stack, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { doesCollectionExist } from '../helpers/utilFunction';
import { uploadCollection } from '../helpers/uploadCollection';

interface Props {
    products: Product[];
}

function parseCurrency(value: number): string {
    return value.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS',
    });
}

const Home: React.FC<Props> = ({ products }) => {
    const [cart, setCart] = React.useState<Product[]>([]);

    const text = React.useMemo(
        () =>
            cart
                .reduce(
                    (message, product) =>
                        message.concat(
                            `* ${product.title} - ${parseCurrency(
                                product.price
                            )}\n`
                        ),
                    ``
                )
                .concat(
                    `\nTotal: ${parseCurrency(
                        cart.reduce(
                            (total, product) => total + product.price,
                            0
                        )
                    )}`
                ),
        [cart]
    );

    return (
        <Stack spacing={6}>
            <Grid
                gridGap={6}
                templateColumns='repeat(auto-fill,minmax(240px,1fr))'
            >
                {products.map((product) => (
                    <Stack
                        key={product._id}
                        backgroundColor='gray.100'
                        borderRadius='md'
                        padding={4}
                        spacing={3}
                    >
                        <Image
                            // maxHeight={128}
                            alt={product.title}
                            as={motion.img}
                            cursor='pointer'
                            layoutId={product.image}
                            borderTopRadius='md'
                            boxSize='300px'
                            objectFit='cover'
                            src={product.image}
                        />
                        <Stack spacing={1}>
                            <Text>{product.title}</Text>
                            <Text
                                fontSize='sm'
                                fontWeight='500'
                                color='green.500'
                            >
                                {parseCurrency(product.price)}
                            </Text>
                        </Stack>
                        <Button
                            onClick={() =>
                                setCart((cart) => cart.concat(product))
                            }
                            colorScheme='primary'
                            size='sm'
                        >
                            Agregar
                        </Button>
                    </Stack>
                ))}
            </Grid>
            {Boolean(cart.length) && (
                <Flex
                    bottom={4}
                    position='sticky'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Button
                        isExternal
                        as={Link}
                        colorScheme='whatsapp'
                        href={`https://wa.me/${
                            process.env.NEXT_PUBLIC_TELEFONO
                        }?text=${encodeURIComponent(text)}`}
                        leftIcon={
                            <Image src='https://icongr.am/fontawesome/whatsapp.svg?size=32&color=ffffff' />
                        }
                        padding={4}
                        size='lg'
                        width='fit-content'
                    >
                        Completar pedido ({cart.length} productos)
                    </Button>
                </Flex>
            )}
        </Stack>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    try {
        const client = await clientPromise;
        const db = client.db('mern_calendar');

        if (!(await doesCollectionExist(db, 'mercadito'))) {
            console.log('dont exist');
            await uploadCollection(db, 'mercadito');
        }

        const products = await db.collection('mercadito').find({}).toArray();

        return {
            revalidate: 10,
            props: {
                isConnected: true,
                products: JSON.parse(JSON.stringify(products)),
            },
        };
    } catch (e) {
        console.error(e);
        return {
            props: { isConnected: false },
        };
    }
};

export default Home;
