import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page-section">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn--primary">
        Back Home
      </Link>
    </section>
  );
}

export default NotFound;