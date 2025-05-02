import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>
        Oops! The page you are looking for does not exist. It might have been moved, deleted, or the URL may be incorrect.
      </p>
      <p>
        Please check the URL and try again, or return to the <Link to="/">homepage</Link>.
      </p>
    </div>
  );
}