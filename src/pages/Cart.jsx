import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {


 const cart=useSelector((state)=>state.cart.items)
 console.log(cart);
 


 

 

  return (
    <>
      <Header />

      <Container className="my-5">
        <h2 className="text-center mb-5">My Cart</h2>

        {cart.length > 0 ? (
          <>
            <Row>
              {cart.map((item) => (
                <Col md={12} key={item.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Row className="align-items-center">
                        <Col md={2}>
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="img-fluid rounded"
                          />
                        </Col>

                        <Col md={3}>
                          <h6>{item.title}</h6>
                          <p className="fw-bold mb-0">₹ {item.price}</p>
                        </Col>

                        {/* <Col md={3} className="d-flex align-items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline-dark"
                         
                          >
                            <FaMinus />
                          </Button>

                          <span className="fw-bold">
                            {item.quantity}
                          </span>

                          <Button
                            size="sm"
                            variant="outline-dark"
                         
                          >
                            <FaPlus />
                          </Button>
                        </Col> */}

                        {/* <Col md={2}>
                          <p className="fw-bold mb-0">
                            ₹ {item.price * item.quantity}
                          </p>
                        </Col> */}

                        <Col md={6} className="text-end">
                          <Button
                            variant="outline-danger"
                          
                          >
                            <FaTrash />
                          </Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Cart Summary */}
            <Card className="mt-4 shadow-sm">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <h5>Total: ₹</h5>
                <Button variant="dark">
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </>
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
    src="https://i.gifer.com/origin/5d/5d20a530b16e22c86347bb057bceabda.gif"
    alt="Empty cart"
    style={{ maxWidth: "300px", marginBottom: "20px" }}
  />

  <h4>Your cart is empty 🛒</h4>
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

export default Cart;
