import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaHeart, FaTrash } from "react-icons/fa";
import { useState } from "react";

function Wishlist() {
  // Temporary wishlist data (later connect to Context / Redux / Backend)
  const [wishlist, setWishlist] = useState([
    // {
    //   id: 1,
    //   title: "iPhone 14",
    //   price: 799,
    //   thumbnail: "https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14-pro/lifestyle/-1200w5/gsmarena_001.jpg",
    //   rating: 4.8,
    // },
    // {
    //   id: 2,
    //   title: "MacBook Pro",
    //   price: 1299,
    //   thumbnail: "https://images.expertreviews.co.uk/wp-content/uploads/2023/02/apple_macbook_pro_16in_m2_pro_2023_review_10.jpg",
    //   rating: 4.7,
    // },
  ]);


  return (
    <>
      <Header />

      <Container className="my-5">
        <h2 className="text-center mb-4">
          <FaHeart className="text-danger" /> My Wishlist
        </h2>

        {wishlist.length > 0 ? (
          <Row>
            {wishlist.map((item) => (
              <Col md={4} key={item.id} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.thumbnail}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{item.title}</Card.Title>

                    <Card.Text className="fw-bold">
                      ₹ {item.price}
                    </Card.Text>

                    <div className="mt-auto d-flex gap-2">
                      <Button variant="dark">
                        Add to Cart
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "60vh",
    textAlign: "center",
  }}
>
  <img
    src="https://www.gospeedy.co.in/images/empty.gif"
    alt="Empty cart"
    style={{ maxWidth: "300px", marginBottom: "20px" }}
  />

  <h4>Your wishlist is empty 🛒</h4>
  <p className="text-muted">
    Looks like you haven’t added anything yet
  </p>
</div>

      
        )}
      </Container>

      <Footer />
    </>
  );
}

export default Wishlist;
