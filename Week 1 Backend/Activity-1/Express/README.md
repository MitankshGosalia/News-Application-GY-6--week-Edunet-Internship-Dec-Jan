# News Application System

This project is a news application system built using Express and MongoDB. The application allows users to fetch news articles based on specific topics and retrieve all news articles stored in the database.

## File: `App.js`

The `App.js` file contains the main logic for handling API requests related to news articles. Below is an explanation of the key parts of the code:

### Importing Required Modules

```javascript
const express = require('express');
const router = express.Router();
const News = require('./models/news'); // Assuming the news model is defined in models/news.js
```

- `express`: The Express framework is used to create the server and handle routing.
- `router`: An instance of the Express router to define routes.
- `News`: The Mongoose model for the news articles.

### Fetch News Articles by Topic

```javascript
router.get('/news/topic/:topic', async (req, res) => {
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
```

- **Route**: `GET /news/topic/:topic`
- **Description**: Fetches news articles that match the specified topic.
- **Parameters**: 
  - `:topic`: The topic to search for in the news articles.
- **Response**:
  - `200 OK`: Returns the news articles that match the topic.
  - `404 Not Found`: If no articles are found for the specified topic.
  - `500 Internal Server Error`: If there is an error while fetching the articles.

### Fetch All News Articles

```javascript
router.get('/news', async (req, res) => {
    try {
        const newsArticles = await News.find();
        res.json(newsArticles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
```

- **Route**: `GET /news`
- **Description**: Fetches all news articles stored in the database.
- **Response**:
  - `200 OK`: Returns all the news articles.
  - `500 Internal Server Error`: If there is an error while fetching the articles.

### Exporting the Router

```javascript
module.exports = router;
```

- **Description**: Exports the router to be used in other parts of the application.

## Usage

1. **Clone the Repository**: Clone the repository to your local machine.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install the required dependencies.
3. **Start the Server**: Run `npm start` to start the server.
4. **Access the API**: Use an API client like Postman to interact with the endpoints.

### Example API Requests

- **Get News Articles by Topic**:
  - URL: `http://localhost:3000/news/topic/:topic`
  - Method: `GET`
  - Response: JSON array of news articles that match the topic.

- **Get All News Articles**:
  - URL: `http://localhost:3000/news`
  - Method: `GET`
  - Response: JSON array of all news articles.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: Elegant MongoDB object modeling for Node.js.

## License

This project is licensed under the MIT License.