import React from 'react'
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchProducts } from '../api/services/productService';
import ProductContainer from "../components/common/products/productContainer";
import {IProduct, IProductCategory} from '../types/productTypes';
import HeaderMain from "../components/layout/header/headerMain";

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
        <HeaderMain />
        <div className='mb-5'>
          <Container>
            {Object.keys(productCategories).map((category) => (
              <Row key={category} className="my-2 gy-3">
                <Col xs={12}>
                  <h1 className="cat-title">{category}</h1>
                </Col>
                {productCategories[category].map((product) => (
                  <Col xs={6} sm={4} lg={3} xl={2} key={product.id}>
                    <ProductContainer product={product} />
                  </Col>
                ))}
              </Row>
            ))}
          </Container>
        </div>
      </>
    )
}

export default HomePage;