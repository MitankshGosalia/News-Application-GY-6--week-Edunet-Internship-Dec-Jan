# NEWSApproach Backend

## Overview
This is the backend for the NEWSApproach application, a news application that provides users with personalized news feeds based on their preferences. The backend is built using Node.js and Express, and it connects to a MongoDB database to store and manage news articles.

## Features
- User registration and login functionality
- Multiple news categories
- API endpoints for fetching and managing news articles
- Machine learning integration for news feed customization

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd NEWSApproach/backend
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Configure the database connection:
   - Open `src/config/db.js` and update the MongoDB connection string.

### Running the Application
1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:5000` (or the port specified in your app).

### API Endpoints
- `GET /api/news`: Fetch all news articles
- `POST /api/news`: Create a new news article
- `GET /api/news/:id`: Fetch a specific news article by ID
- `GET /api/news/category/:category`: Fetch news articles by category

## Database Seeding
To seed the database with sample news articles, run the following command:
```
node ../database/seed/seedNews.js
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Express.js for the web framework
- Mongoose for MongoDB object modeling
- React for the frontend application

For more information, please refer to the frontend and database documentation.