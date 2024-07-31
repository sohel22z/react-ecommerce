import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { fetchProducts } from "./api/services/productService";
import ProductContainer from "./components/common/products/productContainer";

function App() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [productCategories, setProductCategories] = useState<{ [key: string]: unknown[] }>({});

  useEffect(() => {
    const getProducts = async() => {
      try {
        const productsData = await fetchProducts();

        const groupedProducts: { [key: string]: any[] } = productsData.reduce((acc: any, product: any) => {
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
      <Container fluid>
        {Object.keys(productCategories).map((category) => (
          <div key={category}>
            <Row className="my-1 gy-3 mx-lg-5">
              <Col xs={12}>
                <h1 className="cat-title">{category}</h1>
              </Col>
              {productCategories[category].map((product, index) => (
                <Col xs={6} sm={4} lg={3} xl={2} key={index}>
                  <ProductContainer product={product} />
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </>
  )
}

export default App;