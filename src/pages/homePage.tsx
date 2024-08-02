import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/services/productService';
import ProductContainer from "../components/common/products/productContainer";
import HeaderMain from "../components/layout/header/headerMain";
import { IProduct, IProductCategory } from '../types/index';
import { Box, Container, Flex, Grid } from '@radix-ui/themes';

const HomePage: React.FC = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [productCategories, setProductCategories] = useState<IProductCategory>({});

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();

        const groupedProducts = productsData.reduce<IProductCategory>((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {});

        setProductCategories(groupedProducts);
        setProducts(productsData);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  if (loading) {
    return <Flex justify='center' align='center' height='100vh'>Loading...</Flex>
  }

  if (error) {
    return <Flex justify='center' align='center' height='100vh'>Error: {error}</Flex>;
  }

  return (
    <>
      <HeaderMain />
      <Container mb='6'>
        {Object.keys(productCategories).map((category) => (
          <>
            <Box key={category}>
              <Flex direction='column'>
                <Box width='100%'>
                  <h1 className="cat-title">{category}</h1>
                </Box>
              </Flex>
              <Grid columns={{ initial: '1', xs: '3', sm: '4', md: '4', lg: '5' }} gap='15px'>
                {productCategories[category].map((product) => (
                  <Box key={product.id}>
                    <ProductContainer product={product} />
                  </Box>
                ))}
              </Grid>
            </Box>
          </>
        ))}
      </Container>
    </>
  )
}

export default HomePage;