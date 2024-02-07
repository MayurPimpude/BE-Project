import React from 'react';
import '../Style/ImplementationPage.css'; // Import your custom CSS file

const ImplementationPage = () => {
  return (
    <div className="implementation-page">
      <section className="description-section">
        <h2>Implementation of ML Model for Predicting Malnutrition of Baby using mother's health pararmeter</h2>
        
        <h5>Feature Selection</h5>
        <p>
            The following features were selected to implement the model
            <p></p>
        </p>
      </section>

      <section className="image-gallery-section">
        <h2>Image Gallery</h2>
        <div className="image-container">
          <img src="/images/model-training.jpg" alt="Model Training" />
          <img src="/images/data-analysis.jpg" alt="Data Analysis" />
          <img src="/images/frontend-development.jpg" alt="Frontend Development" />
        </div>
        <p>Explore the images below to get a glimpse of our implementation journey.</p>
      </section>
    </div>
  );
};

export default ImplementationPage;
