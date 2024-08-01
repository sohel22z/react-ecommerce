import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/services/productService';
import ProductContainer from "../components/common/products/productContainer";
import HeaderMain from "../components/layout/header/headerMain";
import { IProduct, IProductCategory } from '../types/index';
import { Box, Container, Flex, Grid, Section } from '@radix-ui/themes';

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
    return <div className="d-flex justify-content-center align-items-center vh-100">Loading...</div>;
  }

  if (error) {
    return <div className="d-flex justify-content-center align-items-center vh-100">Error: {error}</div>;
  }

  return (
    <>
      {/* <HeaderMain /> */}
      <div className='mb-5'>
        <div className='container'>
          {Object.keys(productCategories).map((category) => (
            <Flex direction='column' key={category}>
              <Box width='100%'>
                <h1 className="cat-title">{category}</h1>
              </Box>
              <Grid columns={{ initial:'1', xs:'3', sm:'4', md: '4', lg:'5'}} gapX="5" gapY='9'>
                {productCategories[category].map((product) => (
                  <div key={product.id}>
                    <ProductContainer product={product} />
                  </div>
                ))}
              </Grid>
            </Flex>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage;