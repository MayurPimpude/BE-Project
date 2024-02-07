import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style/About.css';
import vemburaj from '../images/vemburaj.jpeg';
import Mayur from '../images/Mayur.jpeg';

const About = () => {
    const teamMembers = [
        {
            name: 'Vemburaj Konar',
            photo: vemburaj, 
            role: 'Role Description',
        },
        {
            name: 'Mayur Pimpude',
            photo: Mayur,
            role: 'Role Description',
        },
        {
            name: 'Deepak Prasad',
            photo: 'deepak.jpg', 
            role: 'Role Description',
        },
        {
            name: 'Heramb Pawar',
            photo: 'heramb.jpg',
            role: 'Role Description',
        },
    ];

    return (
        <Container className="mt-5">
            <h2 className="mb-4">About Us</h2>
            <p>
                Welcome to our website! We are a passionate team from the Artificial Intelligence and Data Science department of Vivekanand Education Society's Institute of Technology. Our collective goal is to address and combat the critical issue of child malnutrition through innovative technology solutions.
            </p>

            <h3 className="mt-4">Our Mission</h3>
            <p>
                At the heart of our mission is the commitment to provide early prediction of malnutrition in babies based on mothers' health parameters and household characteristics. We believe that leveraging artificial intelligence and data science can significantly impact child health outcomes. By offering accurate predictions, we aim to empower parents, healthcare providers, and communities to take proactive measures to ensure the well-being of infants.
            </p>

            <h3 className="mt-4">The Application</h3>
            <p>
                Our application is designed to be a comprehensive tool for predicting and addressing child malnutrition. Using advanced algorithms, we analyze crucial factors such as mothers' health, household characteristics, and historical data to generate accurate predictions. The user-friendly interface ensures accessibility for all users, making it a valuable resource for parents, healthcare professionals, and community health workers.
            </p>
            <p>
                Additionally, our platform goes beyond prediction. We provide an interactive dashboard that facilitates in-depth analysis of malnutrition status in a given area. This feature enables stakeholders to identify trends, allocate resources efficiently, and implement targeted interventions to improve overall child health outcomes.
            </p>

            <h3 className="mt-4">Meet the Team</h3>
            <Row className="mt-3">
                {teamMembers.map((member, index) => (
                    <Col key={index} md={3} className="mb-3">
                        <Card>
                            <img variant="top" src={member.photo} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.role}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default About;

