import React from 'react';
import vemburaj from '../images/vemburaj.jpeg';
import Mayur from '../images/Mayur.jpeg';
import Heramb from '../images/Heramb.jpg';
import Deepak from '../images/deepak.jpg';

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
            photo: Deepak, 
            role: 'Role Description',
        },
        {
            name: 'Heramb Pawar',
            photo: Heramb,
            role: 'Role Description',
        },
    ];

    return (
        <div className="container mx-auto px-4 py-5 mt-70">
            <div className="container mx-auto px-4 py-5 ">
                <div className="rounded-lg overflow-hidden shadow-lg p-6 bg-[#ebf4ff]">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p>
                    Welcome to our website! We are a passionate team from the Artificial Intelligence and Data Science department of Vivekanand Education Society's Institute of Technology. Our collective goal is to address and combat the critical issue of child malnutrition through innovative technology solutions.
                    </p>
                </div>
            </div>


            <div className="container mx-auto px-4 py-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#ebf4ff] rounded-lg overflow-hidden shadow-lg p-6">
                        <h3 className="mt-4 text-2xl font-bold mb-5">Our Mission</h3>
                        <p className="text-center">
                            At the heart of our mission is the commitment to provide early prediction of malnutrition in babies based on mothers' health parameters and household characteristics. We believe that leveraging artificial intelligence and data science can significantly impact child health outcomes. By offering accurate predictions, we aim to empower parents, healthcare providers, and communities to take proactive measures to ensure the well-being of infants.
                        </p>
                    </div>

                    <div className="bg-[#ebf4ff] rounded-lg overflow-hidden shadow-lg p-6 mt-0 md:mt-5">
                    <h3 className="mt-4 text-2xl font-bold mb-5">The Application</h3>
                    <p className="text-center">
                        Our application is designed to be a comprehensive tool for predicting and addressing child malnutrition. Using advanced algorithms, we analyze crucial factors such as mothers' health, household characteristics, and historical data to generate accurate predictions. The user-friendly interface ensures accessibility for all users, making it a valuable resource for parents, healthcare professionals, and community health workers.
                    </p>
                    <p>
                        Additionally, our platform goes beyond prediction. We provide an interactive dashboard that facilitates in-depth analysis of malnutrition status in a given area. This feature enables stakeholders to identify trends, allocate resources efficiently, and implement targeted interventions to improve overall child health outcomes.
                    </p>
                    </div>
                </div>
            </div>


            <h3 className="mt-4 text-2xl font-bold">Meet the Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3">
                {teamMembers.map((member, index) => (
                    <div key={index} className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg">
                        <img className="w-full" src={member.photo} alt={member.name} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{member.name}</div>
                            <p className="text-gray-700 text-base">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
