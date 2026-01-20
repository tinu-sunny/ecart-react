import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Pnf() {
  return (
    <>
      <Header />

      <div className="d-flex align-items-center justify-content-center vh-75">
        <div className="text-center p-4">
          <img
            src="https://webartdevelopers.com/blog/wp-content/uploads/2020/02/CSS-Train-404-Page.gif"
            alt="404 Page Not Found"
            className="img-fluid mb-4"
            style={{ maxWidth: "450px" }}
          />

          <h1 className="fw-bold text-dark">404</h1>
          <h4 className="mb-2">Page Not Found</h4>

          <p className="text-muted mb-4">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>

          <Link to="/">
            <button className="btn btn-dark px-4">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Pnf;
