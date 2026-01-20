import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const baseurl = "https://dummyjson.com/products";

  const getData = async () => {
    try {
      const response = await fetch(baseurl);
      const productData = await response.json();
      setProducts(productData.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />

      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">All Products</h2>

          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Row>
              {products.length > 0 ? (
                products.map((item) => (
                  <Col key={item.id} md={4} lg={3} className="mb-4">
                    <Link
                      to={`/viewprouduct/${item.id}`}
                      className="text-decoration-none text-dark"
                    >
                      <Card className="h-100 shadow-sm product-card">
                        <Card.Img
                          variant="top"
                          src={item.thumbnail}
                          style={{ height: "200px", objectFit: "cover" }}
                        />

                        <Card.Body className="d-flex flex-column">
                          <Card.Title className="fs-6">
                            {item.title}
                          </Card.Title>

                          <Card.Text className="fw-bold mt-2">
                            <FaRupeeSign /> {item.price}
                          </Card.Text>

                          <Card.Text className="text-warning">
                            <FaStar /> {item.rating}
                          </Card.Text>

                          <Button variant="dark" className="mt-auto">
                            View Product
                          </Button>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                ))
              ) : (
                <p className="text-center text-muted">
                  No products available
                </p>
              )}
            </Row>
          )}
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default Product;
