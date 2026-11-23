import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page-placeholder">
      <span className="page-placeholder__eyebrow">404</span>
      <h1>This page is not on the map</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="btn btn--primary">
        Back to home
      </Link>
    </section>
  );
}
