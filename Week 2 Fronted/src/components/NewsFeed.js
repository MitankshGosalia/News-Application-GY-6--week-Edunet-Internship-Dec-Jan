import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsFeed = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/news');
                setNewsArticles(response.data);
            } catch (error) {
                console.error('Error fetching news articles:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="news-feed">
            <h2>Latest News</h2>
            <div className="news-articles">
                {newsArticles.map((article) => (
                    <div key={article._id} className="news-article">
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <span>{article.category}</span>
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsFeed;