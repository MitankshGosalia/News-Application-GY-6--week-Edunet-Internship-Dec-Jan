# NEWSApproach

NEWSApproach is a full-stack news application that provides users with a personalized news experience. The application features a visually appealing landing page, user registration and login functionality, multiple news categories, and a machine learning-powered news feed customization.

## Project Structure

```
NEWSApproach
├── backend
│   ├── src
│   │   ├── controllers
│   │   │   └── newsController.js
│   │   ├── models
│   │   │   └── newsModel.js
│   │   ├── routes
│   │   │   └── newsRoutes.js
│   │   ├── app.js
│   │   └── config
│   │       └── db.js
│   ├── package.json
│   └── README.md
├── frontend
│   ├── public
│   │   ├── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── LandingPage.js
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── NewsCategory.js
│   │   │   ├── NewsFeed.js
│   │   │   └── UIEnhancements.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── main.css
│   ├── package.json
│   └── README.md
├── database
│   ├── seed
│   │   └── seedNews.js
│   └── README.md
└── README.md
```

## Features

1. **Landing Page**: A visually appealing landing page that provides detailed information about the website and its features.
2. **User Registration and Login**: Functionality for users to create accounts and log in to the news website.
3. **Multiple News Categories**: Sections for different news categories displaying a sample of 7-8 news articles in each category.
4. **UI/UX Enhancements**: Improved overall user interface and user experience to make the website more engaging and user-friendly.
5. **ML-Powered News Feed Customization**: Utilizes machine learning to personalize the news feed based on user preferences and behavior.
6. **Dynamic Home Page**: A home page displaying various news articles categorized for user consumption.

## Setup Instructions

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `backend/src/config/db.js`.
4. Start the server using:
   ```
   npm start
   ```

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies using:
   ```
   npm install
   ```
3. Start the React application using:
   ```
   npm start
   ```

### Database

1. Navigate to the `database` directory.
2. Run the seed script to populate the database with sample news articles:
   ```
   node seed/seedNews.js
   ```

## License

This project is licensed under the MIT License.