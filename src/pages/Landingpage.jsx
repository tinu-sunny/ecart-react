import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="container-fluid p-0">
        <Carousel fade interval={3000}>
          <Carousel.Item>
          <img
              src="https://img.lovepik.com/back_pic/05/71/77/565baef950a0664.jpg"
              alt="Fast Delivery"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h2>Shop Smart</h2>
              <p>Discover the best products at great prices</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src="https://img.pikbest.com/origin/10/01/82/867pIkbEsTAIq.png!w700wp"
              alt="Best Deals"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h2>Best Deals</h2>
              <p>Exclusive offers just for you</p>
            </Carousel.Caption>
          </Carousel.Item>
  <img
              src="https://img.freepik.com/premium-photo/3d-render-smartphone-shopping-cart-isolated-blue-background-banner_387680-873.jpg"
              alt="Online Shopping"
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
            /> 
          <Carousel.Item>
           
            <Carousel.Caption>
              <h2>Fast Delivery</h2>
              <p>Quick & reliable doorstep delivery</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* CTA Section */}
      <div className="text-center my-5">
        <h3 className="mb-3">Explore Our Products</h3>
        <p className="text-muted mb-4">
          Browse a wide range of quality products handpicked for you
        </p>

        <Link to="/prouduct">
          <button className="btn btn-dark btn-lg px-4">
            View Items
          </button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Landingpage;
