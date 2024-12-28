import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <h1>Welcome to NEWSApproach</h1>
                <p>Your go-to platform for the latest news across various categories.</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>User-friendly interface for easy navigation.</li>
                    <li>Personalized news feed powered by machine learning.</li>
                    <li>Multiple news categories to choose from.</li>
                    <li>Stay updated with real-time news articles.</li>
                </ul>
            </section>
            <section className="call-to-action">
                <h2>Join Us Today!</h2>
                <p>Create an account to start customizing your news experience.</p>
                <button className="cta-button">Sign Up</button>
            </section>
        </div>
    );
};

export default LandingPage;