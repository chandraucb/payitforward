import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary py-5">
      <div className="container text-center">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={handleReturn}
          >
            &larr; Return
          </button>
        )}
        <h4 className="mb-4">
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Pay it Forward Team
        </h4>
        <button
          className="btn btn-dark"
          onClick={handleClickToTop}
        >
          Scroll to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

