import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { BsCheckCircleFill, BsHouseDoor, BsClipboardCheck } from "react-icons/bs";
import { Link } from "react-router-dom";


function OrderPlaced() {
    
  return (
       <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={10} md={6} lg={4}>
          <Card className="text-center shadow-lg border-0">
            <Card.Body className="p-4">

              {/* Success Icon */}
              <BsCheckCircleFill
                size={80}
                className="text-success mb-3"
              />

              {/* Title */}
              <Card.Title className="fs-3 fw-bold">
                Order Placed Successfully!
              </Card.Title>

              {/* Message */}
              <Card.Text className="text-muted mt-2">
                Thank you for your purchase. Your order has been confirmed.
              </Card.Text>

              {/* Order Details */}
              <div className="bg-light rounded p-3 mt-4 text-start">
                <p className="mb-1">
                  <strong>Order ID:</strong> #ORD123456
                </p>
                <p className="mb-1">
                  <strong>Estimated Delivery:</strong> 3–5 Days
                </p>
                <p className="mb-0">
                  <strong>Payment Mode:</strong> COD
                </p>
              </div>

              {/* Buttons */}
              <Row className="mt-4 g-2">
                <Col>
                  <Link to={'/'}>
                      <Button variant="outline-secondary" className="w-100">
                        <BsHouseDoor className="me-2" />
                        Home
                      </Button>
                  </Link>
                </Col>
                <Col>
                  <Link to={'/cart'}>
                      <Button variant="primary" className="w-100">
                        <BsClipboardCheck className="me-2" />
                        View Orders
                      </Button>
                  </Link>
                </Col>
              </Row>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default OrderPlaced