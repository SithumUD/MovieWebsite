import React, { useState } from 'react';
import './Contact.css'; // Ensure this CSS file is properly linked

export default function Contact() {
  const [showMovieRequest, setShowMovieRequest] = useState(false);
  const [showComplaintForm, setShowComplaintForm] = useState(false);

  // Handlers to open/close modals
  const toggleMovieRequest = () => setShowMovieRequest(!showMovieRequest);
  const toggleComplaintForm = () => setShowComplaintForm(!showComplaintForm);

  return (
    <div className="contact-page">
      {/* Header with logo */}
      <header className="contact-header">
        <img src="/logo.png" alt="Logo" className="logo" />
      </header>

      {/* Buttons to open forms */}
      <div className="contact-buttons">
        <button onClick={toggleMovieRequest}>Request a Movie</button>
        <button onClick={toggleComplaintForm}>Send a Complaint/Feedback</button>
      </div>

      {/* Movie Request Modal */}
      {showMovieRequest && (
        <div className="modal-overlay" onClick={toggleMovieRequest}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Request a Movie</h2>
            <form className="movie-request-form">
              <div className="form-group">
                <label htmlFor="movie-name">Movie Name</label>
                <input type="text" id="movie-name" placeholder="Enter the movie name" />
              </div>
              <div className="form-group">
                <label htmlFor="movie-year">Release Year (Optional)</label>
                <input type="text" id="movie-year" placeholder="Enter the release year" />
              </div>
              <div className="form-group">
                <label htmlFor="movie-genre">Genre (Optional)</label>
                <input type="text" id="movie-genre" placeholder="Enter the genre" />
              </div>
              <button type="submit">Submit Request</button>
            </form>
            <button className="close-btn" onClick={toggleMovieRequest}>Close</button>
          </div>
        </div>
      )}

      {/* Complaint/Feedback Modal */}
      {showComplaintForm && (
        <div className="modal-overlay" onClick={toggleComplaintForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Send a Complaint or Feedback</h2>
            <form className="complaint-form">
              <div className="form-group">
                <label htmlFor="complaint-name">Your Name</label>
                <input type="text" id="complaint-name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label htmlFor="complaint-email">Your Email</label>
                <input type="email" id="complaint-email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="complaint-message">Your Message</label>
                <textarea id="complaint-message" placeholder="Enter your complaint or feedback" rows="5"></textarea>
              </div>
              <button type="submit">Submit Complaint</button>
            </form>
            <button className="close-btn" onClick={toggleComplaintForm}>Close</button>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>How can I request a movie?</summary>
          <p>You can request a movie by clicking the "Request a Movie" button above and filling out the form. Provide the movie name, and if possible, add the release year and genre for better accuracy.</p>
        </details>
        <details>
          <summary>How do I send a complaint or feedback?</summary>
          <p>Click the "Send a Complaint/Feedback" button and fill in your details along with your complaint or feedback. Once submitted, we'll get back to you within 48 hours.</p>
        </details>
        <details>
          <summary>Is there a cost for requesting a movie?</summary>
          <p>No, requesting a movie is free. However, fulfilling the request depends on availability and licensing agreements.</p>
        </details>
        <details>
          <summary>How long does it take for a movie request to be processed?</summary>
          <p>We typically process movie requests within 5-7 business days, depending on the popularity and availability of the movie.</p>
        </details>
      </div>
    </div>
  );
}
