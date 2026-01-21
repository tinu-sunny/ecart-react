import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementqty, incrementqty, removeitem } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
const [cart,setCart]=useState([])
const dispatch = useDispatch()
 const cartArray=useSelector((state)=>state.cart.items)
 console.log(cart);

 useEffect(()=>{
  setCart(cartArray)
 },[cartArray])

 
 


 

 

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
                          <h6 className="mb-4">{item.title}</h6>
                        
                        </Col>

                        <Col md={3} className="d-flex align-items-center gap-2 mb-4">
                          <Button
                            size="sm"
                            variant="outline-dark"
                         onClick={()=>{dispatch(decrementqty(item))}}
                          >
                            <FaMinus />
                          </Button>

                          <span className="fw-bold">
                            {item.qty}
                          </span>

                          <Button
                            size="sm"
                            variant="outline-dark"
                         onClick={()=>{dispatch(incrementqty(item))}}
                          >
                            <FaPlus />
                          </Button>
                        </Col>

                        <Col md={2}>
                          <p className="fw-bold mb-0">
                            ₹ {Math.floor(item.totalp)}
                          </p>
                        </Col>

                        <Col md={6} className="text-end">
                          <Button
                            variant="outline-danger"
                          onClick={()=>{dispatch(removeitem(item.id))}}
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
                <h5>Total: ₹ {cart && cart.length > 0
  ? cart.reduce((sum, item) =>Math.floor( sum + item.totalp), 0)
  : "0"}</h5>
                <Link to={'/checkout'}>
                  <Button variant="dark">
                    Proceed to Checkout
                  </Button>
                </Link>
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
