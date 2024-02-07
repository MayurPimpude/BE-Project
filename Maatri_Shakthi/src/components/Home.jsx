import React, { useState} from 'react';
import heroImg from '../images/motherAndBaby2.png'; // Import your hero image here
import shape1 from '../assets/img/hero/hero-1/shape-1.svg'; // Import your shape images here
// import aboutImage from '../assets/img/about/about-5/about-img.jpg';
import aboutImage from '../images/motherAndBaby3.jpg';
import product from '../images/product.jpg'
import shape2 from '../assets/img/hero/hero-1/shape-2.svg';
import shape3 from '../assets/img/hero/hero-1/shape-3.svg';
import shape4 from '../assets/img/hero/hero-1/shape-4.svg';
import '../assets/css/animate.css'
import '../assets/css/base-style.css'
import '../assets/css/bootstrap-5.0.0-alpha-2.min.css'
import '../assets/css/lindy-uikit.css'
import '../assets/css/LineIcons.2.0.css'

const Home = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
  
      
    return (
        <>
{/* ***********************************************LOGO & Intro ***********************************************************/}
            <div className="hero-section hero-style-1 mt-100">
                <div className="container absolute ml-50 overflow-hidden">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2 px-4 ">
                            <div className="hero-content-wrapper mt-100 ">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                                Welcome to <br></br> Maatri Shakti
                                </h2>
                                <p className="text-gray-600 mb-6">
                                Illuminating Child Nutrition with Intelligent Insights: Empowering Parents and Educators to Nourish Young Minds for a Brighter Future!
                                </p>
                                <div
                                    className="button button-lg radius-50 bg-blue-500 text-white py-3 px-6 shadow-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Get Started
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="w-full lg:w-1/2 px-12 ">
                            <div className="hero-image">
                                <img src={heroImg}  alt="Hero" className=""/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="shapes">
                    <img src={shape2} alt="Shape" className="shape shape-2" />
                    <img src={shape3} alt="Shape" className="shape shape-3" />
                    <img src={shape4} alt="Shape" className="shape shape-4" />
                </div>
            </div>


{/* ***********************************************Features***********************************************************/}
            <section id="features" className="feature-section feature-style-3 bg-gray-100 py-12 mt-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Awesome Features</h3>
                    <p className="text-gray-600">"Maatri Shakthi AI" is a cutting-edge website offering a comprehensive platform integrating <br></br>advanced machine learning algorithms and insightful data analysis tools. </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        <div className="single-feature flex items-center bg-white rounded-lg p-6">
                            <div className="icon bg-blue-500 text-white rounded-full p-3 mr-4">
                            <i class="lni lni-graph"></i>
                            </div>
                            <div className="content">
                            <h5 className="text-lg font-semibold mb-2">Artificial Intelligence</h5>
                            <p className="text-gray-600">AI leverages to deliver intelligent solutions for Nutrition and Health Domain</p>
                            </div>
                        </div>
                        <div className="single-feature flex items-center bg-white rounded-lg p-6">
                            <div className="icon bg-blue-500 text-white rounded-full p-3 mr-4">
                            <i class="lni lni-search"></i>
                            </div>
                            <div className="content">
                            <h5 className="text-lg font-semibold mb-2">Analysis</h5>
                            <p className="text-gray-600">Gain valuable insights into your data through robust analysis tools</p>
                            </div>
                        </div>
                        <div className="single-feature flex items-center bg-white rounded-lg p-6">
                            <div className="icon bg-blue-500 text-white rounded-full p-3 mr-4">
                            <i class="lni lni-website"></i>
                            </div>
                            <div className="content">
                            <h5 className="text-lg font-semibold mb-2">Website</h5>
                            <p className="text-gray-600">Our website serves as a user-friendly portal for accessing AI-driven tools, resources, and insights</p>
                            </div>
                        </div>
                        <div className="single-feature flex items-center bg-white rounded-lg p-6">
                            <div className="icon bg-blue-500 text-white rounded-full p-3 mr-4">
                            <i class="lni lni-bar-chart"></i>
                            </div>
                            <div className="content">
                            <h5 className="text-lg font-semibold mb-2">Dashboard</h5>
                            <p className="text-gray-600">Experience a seamless and intuitive dashboard interface for decision making</p>
                            </div>
                        </div>
                        <div className="single-feature flex items-center bg-white rounded-lg p-6">
                            <div className="icon bg-blue-500 text-white rounded-full p-3 mr-4">
                            <i className="lni lni-vector"></i>
                            </div>
                            <div className="content">
                            <h5 className="text-lg font-semibold mb-2">Machine Learning</h5>
                            <p className="text-gray-600">With state-of-the-art machine learning capabilities we deployed the best trained models</p>
                            </div>
                        </div>
                        <div className="single-feature flex items-center bg-white rounded-lg p-6">
                            <div className="icon bg-blue-500 text-white rounded-full p-3 mr-4">
                            <i class="lni lni-files"></i>
                            </div>
                            <div className="content">
                            <h5 className="text-lg font-semibold mb-2">Insights</h5>
                            <p className="text-gray-600">Access actionable insights derived from AI-driven analytics</p>
                            </div>
                        </div>
                 
                    </div>
                </div>
            </section>


{/* ***********************************************About ***********************************************************/}
            <section id="about" className="about-section about-style-5" style={{ backgroundImage: `url(${aboutImage})` }}>                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="about-content-wrapper">
                                <div className="section-title mb-30">
                                    <h3 className="mb-25">Unlocking the Future of Child and Mother Health Starts Now</h3>
                                    <p>Say goodbye to wasted efforts and resources on ineffective health assessments. Our platform guarantees precise insights into your baby's nutrition based on maternal health parameters. With us, ensuring your child's well-being is a promise, not a gamble</p>
                                </div>
                                <a href="#0" className="button button-lg radius-10">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


{/* ***********************************************Products ***********************************************************/}
            <div className="container my-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Products</h2>

                <div class="flex flex-col md:flex-row justify-evenly">
                    <div
                        className={`w-full md:w-1/4 my-2 mx-1 overflow-hidden rounded-lg
                            ${
                            isHovered1 ? 'scale-125 ' : ''
                            }` 
                        }
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <div
                            className={`animated-card bg-[#B2BEF0] p-4  transform transition-all duration-300 
                            ${
                            isHovered1 ? 'scale-100' : ''
                            }` 
                            }
                        >
                            <h3 className="text-xl font-bold mb-2">Prediction-CSV</h3>
                            <p className="text-sm mb-4">
                                Simply upload a CSV file, and our advanced model will swiftly provide you with accurate prediction percentages.
                            </p>
                            <a href="/predictionCsv" className="block text-center text-black bg-[#FBBFBE] rounded-full py-2 px-6 hover:bg-[#FBBFBE] transition duration-300">Predict</a>
                         </div>
                    </div>

                    <div
                        className={`w-full md:w-1/4 my-2 mx-1 overflow-hidden rounded-lg
                            ${
                            isHovered2 ? 'scale-125 ' : ''
                            }` 
                        }
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <div
                            className={`animated-card bg-[#B2BEF0] p-4  transform transition-all duration-300 
                            ${
                            isHovered2 ? 'scale-100' : ''
                            }` 
                            }
                        >
                            <h3 className="text-xl font-bold mb-2">Prediction-Values</h3>
                            <p className="text-sm mb-4">
                            By inputting individual health parameters our model will  analyze the data and provide accurate predictions on malnutrition status.                            </p>
                            <a href="/predictionValues" className="block text-center text-black bg-[#FBBFBE] rounded-full py-2 px-6 hover:bg-[#FBBFBE] transition duration-300">Predict</a>
                         </div>
                    </div>

                    <div
                        className={`w-full md:w-1/4 my-2 mx-1 overflow-hidden rounded-lg
                            ${
                            isHovered3 ? 'scale-125 ' : ''
                            }` 
                        }
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        <div
                            className={`animated-card bg-[#B2BEF0] p-4 transform transition-all duration-300 
                            ${
                            isHovered3 ? 'scale-100' : ''
                            }` 
                            }
                        >
                            <h3 className="text-xl font-bold mb-2">Dashboard</h3>
                            <p className="text-sm mb-4">
                            Unlock a world of possibilities with our intuitive dashboard button designed for comprehensive analysis.
                            </p>
                            <a href="https://app.powerbi.com/reportEmbed?reportId=8944653a-b452-45ea-8dec-114285388ed0&autoAuth=true&ctid=cca3f0fe-586f-4426-a8bd-b8146307e738" className="block text-center text-black bg-[#FBBFBE] rounded-full py-2 px-6 hover:bg-[#FBBFBE] transition duration-300">Dashboard</a>
                         </div>
                    </div>
                </div>

                   

                {/* <div className="w-full mt-8">
                    <img src={product} className="mx-auto max-w-full" alt="Product" />
                </div> */}

            </div>
        </>
    );
};

export default Home;
