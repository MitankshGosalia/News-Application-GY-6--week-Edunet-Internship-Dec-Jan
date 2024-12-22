// Import required modules
const express = require('express');
const router = express.Router();
const News = require('./Models/news'); // Assuming your news model is in Models/news.js

// Get news articles by topic
router.get('/news/:topic', async (req, res) => {
    const topic = req.params.topic;

    try {
        // Fetch news articles that match the topic
        const newsArticles = await News.find({ topic: topic }); // Assuming your news schema has a 'topic' field

        if (newsArticles.length === 0) {
            return res.status(404).json({ message: 'No articles found for this topic.' });
        }

        res.json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all news articles
router.get('/news', async (req, res) => {
    try {
        const newsArticles = await News.find();
        res.json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export the router
module.exports = router;