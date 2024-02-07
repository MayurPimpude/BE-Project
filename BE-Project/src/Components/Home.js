import React from 'react';
import motherAndBaby2 from '../images/motherAndBaby2.png';
import product from '../images/product.jpg'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Style/Home.css'


const Home = () => {
  return (
    <>
      <div className="container my-3">
        <div className="row align-items-center justify-start">
          <div className="col-md-6 mb-4">
            <h1 className="mb-4">Welcome to Maatri Shakti</h1>
            <h2 className="mb-4">Illuminating Child Nutrition with Intelligent Insights!</h2>
          </div>
          <div className="col-md-6 justify-end">
            <img
              src={motherAndBaby2}
              className="img-fluid custom-img-lg" 
              alt="Mother and Baby"
            />
          </div>
        </div>
      </div>

      <div className="my-5 bg-light p-5">
        <Container >
          <Row>
            <Col>
              <h2 className="text-center mb-4 display-5">Our Features</h2>
              <p className="text-center lead font-weight-bold text-dark ">
                At Maatri Shakti, we harness the power of Artificial Intelligence to provide insightful predictions on child malnutrition based on crucial maternal health parameters. Our innovative platform combines advanced AI algorithms with an interactive dashboard, offering accurate forecasts and analysis for informed decision-making in maternal and child health.
              </p>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="container my-5">
      <h2 className="text-center mb-4 display-5">Products</h2>
        <div className="row">
          <div className="col-md-3 my-2 mx-1">
            <Card className="animated-card"  style={{ backgroundColor: '#B2BEF0' }}>
              <Card.Body>
                <Card.Title>Prediction</Card.Title>
                <Card.Text>
                Unlock the power of our cutting-edge prediction button to gain valuable insights into your child's nutritional well-being. 
                </Card.Text>
                <Button variant="primary" href="/Prediction" style={{color: 'black', backgroundColor: '#FBBFBE'}}>Click me</Button>
              </Card.Body>
            </Card>
          </div>

          
          <div className="col-md-3 my-2 mx-1">
            <Card className="animated-card" style={{ backgroundColor: '#B2BEF0' }}>
              <Card.Body>
                <Card.Title>Dashboard</Card.Title>
                <Card.Text>
                Unlock a world of possibilities with our intuitive dashboard button designed for comprehensive analysis.
                </Card.Text>
                <Button href="https://app.powerbi.com/reportEmbed?reportId=8944653a-b452-45ea-8dec-114285388ed0&autoAuth=true&ctid=cca3f0fe-586f-4426-a8bd-b8146307e738" variant="primary" style={{color: 'black', backgroundColor: '#FBBFBE'}}>Click me</Button>
              </Card.Body>
            </Card>
          </div>

          <div style={{ maxWidth: '40%', margin: 'auto' }}>
            <img src={product} className="img-fluid" alt="Product" />
          </div>
          
       </div>
    
    </div>

    </>
  );
};

export default Home;
