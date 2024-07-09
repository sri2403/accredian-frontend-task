import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import img1 from "../images/img1.jpg";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    return (
        <div className='container-fluid text-center'>
            <Nav /> 
            <section className='p-2'>
                <h3>Let's Learn & Earn</h3>
                <h3>Get a chance to win up-to <i style={{ color: 'gold' }}>Rs.15,000 <i className="fa-solid fa-gift"></i></i></h3>
            </section>
            <section id="refer">
                <h2 className='p-2'>How do I Refer?</h2>
                <img src={img1} alt="Refer" style={{ width: '700px', height: '400px' }} />
                <ul className="list-unstyled pl-6">
                    <li className="mb-2"><h6>1. Submit referral easily via our website's referral section.</h6></li>
                    <li className="mb-2"><h6>2. Earn rewards once your referral joins an Accredian Program.</h6></li>
                    <li className="mb-2"><h6>3. Both parties receive a bonus 30 days after program enrollment.</h6></li>
                    <li className="mb-2"><h6>4. By clicking the "Refer" button, you agree to our Referral Program Terms and Conditions.</h6></li>
                </ul>
                <div className='p-2'>
                    <button className='btn btn-success btn-lg' onClick={()=>navigate("/form")}>Refer Now</button>
                </div>
                <div className='p-2'>
                    <h6>After successfully submitting the referral form, the referee will receive an email stating, "You have been referred to our program."</h6>
                </div>
            </section>
            <section id="benefits">
                <h2>What are the Referral Benefits?</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th style={{ width: '50%' }}>Programs</th>
                                <th>Referrer Bonus</th>
                                <th>Referee Bonus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> Professional Certificate Program in Product Management</td>
                                <td>7,000</td>
                                <td>9,000</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> PG Certificate Program in Strategic Product Management</td>
                                <td>9,000</td>
                                <td>11,000</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> Executive Program in Data Driven Product Management</td>
                                <td>10,000</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> Executive Program in Product Management and Digital Transformation</td>
                                <td>10,000</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> Executive Program in Product Management</td>
                                <td>10,000</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> Advanced Certification in Product Management</td>
                                <td>10,000</td>
                                <td>10,000</td>
                            </tr>
                            <tr>
                                <td><i className="fa-solid fa-book me-2"></i> Executive Program in Product Management and Project Management</td>
                                <td>10,000</td>
                                <td>10,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <section id="faqs" className='p-3'>
                <h2>Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faqHeadingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
                                Question 1: What is the eligibility criteria for the referral program?
                            </button>
                        </h2>
                        <div id="faqCollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqHeadingOne" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Answer: Referrers must actively engage with our platform and demonstrate ongoing involvement in our community.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faqHeadingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
                                Question 2: How can I track my referral rewards?
                            </button>
                        </h2>
                        <div id="faqCollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Answer: To track your referral rewards, simply log in to your account and navigate to the referral section or dashboard. Here, you'll find detailed information about the status of your referrals, including the number of successful referrals, pending rewards, and those already credited. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faqHeadingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
                                Question 3: What are the terms and conditions for the referral program?
                            </button>
                        </h2>
                        <div id="faqCollapseThree" className="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                Answer: Our referral program requires participants to maintain active accounts and adhere to platform usage policies. Referees must enroll in our accredited programs within the designated timeframe to qualify for bonuses. Rewards are processed after verification, typically within 30 days of the referee's enrollment. For detailed terms and conditions, please refer to our official documentation available on our website.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="support">
                <h2>Support</h2>
                <p>For any specific queries or assistance regarding your referral rewards, feel free to reach out to our support team. We're here to help you every step of the way.</p>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;
