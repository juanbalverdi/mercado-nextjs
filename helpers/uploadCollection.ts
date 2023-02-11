import { Db } from 'mongodb';
import { Product } from '../product/types';

export const uploadCollection = async (db: Db, collectionName: string) => {
    try {
        const database = db;
        const mercadito = database.collection<Product>(collectionName);

        const result = await mercadito.bulkWrite([
            {
                insertOne: {
                    document: {
                        title: 'Jugo de Pomelo',
                        category: 'Bebidas sin Alcohol',
                        description:
                            'Jugo de pomelo orgánico "Naturaleza Viva"',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402372/mercado/wmqy5cygtbrrkhjnggqk.jpg',
                        price: 1060,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Yerba Mate Kalena',
                        category: 'Almacén',
                        description:
                            'Yerba mate sin agroquímicos, despalada, artesanal, envasada en origen. Origen: Misiones.',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402403/mercado/p2akvwr7fbpownkzfwrh.jpg',
                        price: 1100,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Granola',
                        category: 'Almacén',
                        description: 'Marca Zafran, por 100 grs',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402318/mercado/ldivmulax7y4pplxl1fj.jpg',
                        price: 100,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Galletas Integrales Dulces',
                        category: 'Almacén',
                        description:
                            'Marca Cachafaz, con azúcar integral mascabo y sal marina',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402289/mercado/ubff91xu2aidgggwxwpf.jpg',
                        price: 490,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Fideos Integrales',
                        category: 'Almacén',
                        description:
                            'Delafer, cinta, canuto o tirabuzón, distintas variedades de vegetales. (Sin huevo - apto veganos)',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402260/mercado/cpdg3dmfuonbzymlfmsb.jpg',
                        price: 580,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Dulce de Leche Orgánico',
                        category: 'Almacén',
                        description:
                            'Dulce de leche orgánico, elaborado con azucar rubia orgánica. Origen: Santa Fe',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402228/mercado/q5xgkugctlelzochid57.jpg',
                        price: 1870,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Dátiles',
                        category: 'Almacén',
                        description:
                            'Dátiles. Origen: Irán / Egipto, por 100 grs',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402172/mercado/aj5033ln7bjbudqziil5.jpg',
                        price: 230,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Aceite de Girasol',
                        category: 'Almacén',
                        description:
                            'Aceite de girasol producción orgánico prensado en frío virgen, Origen: Santa Fe',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675401916/mercado/zs5trbgffrfngj8odmh8.jpg',
                        price: 1530,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Aceite de Oliva',
                        category: 'Almacén',
                        description:
                            'Aceite de oliva orgánico primera prensada en frio, extra virgen "Ganapati Mangalah" Origen: Fincas Don Alejandro: San Marcos Sierras.',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402113/mercado/ukq2kgyntth5c5bhjqe2.jpg',
                        price: 1625,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Aceite de Lino',
                        category: 'Almacén',
                        description:
                            'Aceite de lino "Épicos" prensado en frío, producción agroecológica 250ml vidrio',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402066/mercado/gchoxewgwumg9qvce3yx.jpg',
                        price: 1500,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Quinoa * 250 grs',
                        category: 'Almacén',
                        description:
                            'Quinoa "QUINOA MIX", mezcla de quinoa roja y blanca lavada. Libre de gluten - Sin T.A.C.C.',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402726/mercado/rfb2vkwyunuqxyzkviww.jpg',
                        price: 770,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Miel Orgánica',
                        category: 'Almacén',
                        description:
                            'Miel de palo pura monofloral de monte. Contiene mucho propóleo. ',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402643/mercado/rca7pxxzj9ecgaxmvbxm.jpg',
                        price: 1140,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Mermelada Orgánica',
                        category: 'Almacén',
                        description:
                            'Mermeladas orgánicas "Naturaleza viva" con azúcar rubia orgánica',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402615/mercado/y69fjlmjwltywrt1tnav.jpg',
                        price: 790,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Kéfir de Jengibre y Limón',
                        category: 'Bebidas sin Alcohol',
                        description:
                            'Bebida probiótica de kéfir, sin tacc, 100% vegetal, origen: Agua de Oro',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402515/mercado/gjvc4tx000yg3lko0ptm.jpg',
                        price: 790,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Yerba Mate Jactancia',
                        category: 'Almacén',
                        description:
                            'Yerba mate barbacua sin agroquímicos, elaborada con palo. Origen: San Pedro, Misiones',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402347/mercado/jakymtrpldkll0rwov6b.jpg',
                        price: 2500,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Maca',
                        category: 'Suplemento',
                        description:
                            'Maca en polvo, "Kalpa", producción orgánica. paquete de 500g. Origen: Perú',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402449/mercado/xyunbs4lcahzpmmxjryq.jpg',
                        price: 880,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Moringa * 50 grs',
                        category: 'Suplemento',
                        description:
                            'Moringa en polvo, producción agroecológica de las Yungas Jujeñas. Origen: Jujuy',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402710/mercado/rjbtwam5xmwba5p5izi5.jpg',
                        price: 550,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Almendras',
                        category: 'Frutos Secos',
                        description:
                            'Almendras agroecológicas. Origen: Catamarca, por 100 grs.',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402141/mercado/hmvwujirpbl82rwz3q2l.png',
                        price: 630,
                    },
                },
            },
            {
                insertOne: {
                    document: {
                        title: 'Milanesas Veganas',
                        category: 'Congelados',
                        description:
                            'Milanesas de legumbres texturizadas. Origen: Córdoba',
                        image: 'https://res.cloudinary.com/dxhroyz3b/image/upload/v1675402671/mercado/gzxdacflsyflpvrrttrv.jpg',
                        price: 470,
                    },
                },
            },
        ]);

        // console.log(result);
    } catch (e) {
        console.log(e);
    }
};
