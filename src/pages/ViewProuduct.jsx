import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Card, Button, Spinner } from "react-bootstrap";

function ViewProduct() {
  const { id } = useParams();
const [liked ,SetLiked ]=useState(false)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseurl = `https://dummyjson.com/products/${id}`;

  const getData = async () => {
    try {
      const response = await fetch(baseurl);
      const productData = await response.json();
      setProduct(productData);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <>
      <Header />

      {/* Product Details */}
      <div className="bg-light py-5">
        <Container>
          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" />
            </div>
          ) : (
            <Row className="align-items-center">
              <Col md={6} className="text-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="img-fluid rounded"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                />
              </Col>

              <Col md={6}>
                <h2 className="mb-3">{product.title}</h2>
                <p className="text-muted">{product.description}</p>

                <h4 className="fw-bold mb-2">$ {product.price}</h4>

            <div className="d-flex align-items-center justify-content-between mt-2">
      
      {/* Rating */}
      <p className="text-warning mb-0">
        <FaStar /> {product.rating}
      </p>

      {/* Wishlist */}
      <span
        onClick={() => SetLiked(!liked)}
        style={{ cursor: "pointer" }}
        title="Add to Wishlist"
      >
        {liked ? (
          <FaHeart className="text-danger" size={20} />
        ) : (
          <FaRegHeart size={20} />
        )}
      </span>

    </div>

                <div className="d-flex gap-3 mt-4">
                  <Button variant="outline-dark">
                    Add to Wishlist
                  </Button>
                  <Button variant="dark">
                    Add to Cart
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>

      {/* Reviews Section */}
      <Container className="my-5">
        <h3 className="text-center mb-4">User Reviews</h3>

        <Row>
          {product?.reviews?.length > 0 ? (
            product.reviews.map((item, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <Card.Text>"{item.comment}"</Card.Text>
                    <Card.Text className="fw-semibold">
                      ~ {item.reviewerName}
                    </Card.Text>
                    <Card.Text className="text-warning">
                      <FaStar /> {item.rating}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center text-muted">
              No reviews available
            </p>
          )}
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default ViewProduct;
