# News API

This project is an API integration for a news website using Express, Node.js, and Mongoose.

## Folder Structure

- `API/`: Contains the main API code.
  - `Models/`: Contains the Mongoose models.
    - `news.js`: Defines the schema for the news articles.
  - `node_modules/`: Contains the Node.js dependencies.
  - `.gitignore`: Specifies files and directories to be ignored by Git.
  - `README.md`: Provides information about the project.
  - `package-lock.json`: Automatically generated file for locking the dependencies.
  - `package.json`: Contains metadata about the project and its dependencies.
  - `index.js`: The main entry point of the application.

## Setup

1. Clone the repository.
2. Navigate to the `API` directory.
3. Run `npm install` to install the dependencies.
4. Create a `.env` file in the `API` directory with the following content: PORT = 3000 MONGODB_URI = mongodb://localhost/newsdb
5. Start the server with `npm run dev`.

## Endpoints

- `GET /news`: Retrieves all news articles.
- `GET /news/:id`: Retrieves a single news article by ID.
- `POST /news`: Creates a new news article.
- `PATCH /news/:id`: Updates an existing news article by ID.
- `DELETE /news/:id`: Deletes a news article by ID.

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `mongoose`: Elegant MongoDB object modeling for Node.js.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.

## Usage

1. Ensure MongoDB is running on your local machine.
2. Use Postman or any other API client to interact with the endpoints.

## License

This project is licensed under the MIT License.