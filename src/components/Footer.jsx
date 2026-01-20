import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className="mt-5 bg-light">
      <Container>
        <Card className="border-0 bg-light text-center text-md-start">
          <Row className="py-4">
            
            {/* Brand Section */}
            <Col md={4} className="mb-3">
              <h5 className="fw-bold">🛒 E-Cart</h5>
              <p className="text-muted">
                Your one-stop shop for quality products and fast delivery.
              </p>
            </Col>

            {/* Contact Section */}
            <Col md={4} className="mb-3">
              <h6 className="fw-semibold">Contact Us</h6>
              <p className="text-muted mb-1">
                Building No: 12, Vile Parle
              </p>
              <p className="text-muted mb-1">
                Mumbai, Maharashtra
              </p>
              <p className="text-muted">
                Post Code: 400057
              </p>
            </Col>

            {/* Quick Links */}
            <Col md={4} className="mb-3">
              <h6 className="fw-semibold">Quick Links</h6>
              <p className="mb-1">Home</p>
              <p className="mb-1">Products</p>
              <p className="mb-1">Cart</p>
            </Col>

          </Row>

          {/* Copyright */}
          <Card.Footer className="bg-light text-center text-muted border-0">
            © 2025 E-Cart. All rights reserved.
          </Card.Footer>
        </Card>
      </Container>
    </footer>
  );
}
