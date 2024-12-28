import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsCategory = ({ category }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(`/api/news?category=${category}`);
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [category]);

    return (
        <div className="news-category">
            <h2>{category}</h2>
            <div className="articles">
                {articles.map(article => (
                    <div key={article._id} className="article">
                        <h3>{article.title}</h3>
                        <p>{article.content}</p>
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsCategory;