import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container py-5" style={{ minHeight: '60vh' }}>
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 text-center">
          <h1 className="display-4 fw-bold mb-3">404</h1>
          <h2 className="h4 mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">
            The page you are looking for doesn’t exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
