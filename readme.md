# Backend for Notes Management Application

## Project Overview

The backend of the Notes Management Application is designed to empower users with the ability to perform CRUD operations on their notes. Users can create, read, update, and delete notes, as well as share them with other users. Additionally, the application supports a search feature, enabling users to find notes based on keywords.

## Technologies Used

- **Framework:** Express.js
- **Database:** MongoDB


## API Endpoints

Access Swagger API Docs at `/docs`

### Authentication Endpoints

- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in to an existing user account and receive an access token.

### Note Endpoints

- `GET /api/notes`: Get a list of all notes for the authenticated user.
- `GET /api/notes/:id`: Get a note by ID for the authenticated user.
- `POST /api/notes`: Create a new note for the authenticated user.
- `PUT /api/notes/:id`: Update an existing note by ID for the authenticated user.
- `DELETE /api/notes/:id`: Delete a note by ID for the authenticated user.
- `POST /api/notes/:id/share`: Share a note with another user for the authenticated user.
- `GET /api/search?q=:query`: Search for notes based on keywords for the authenticated user.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rg-rupeee/tasks-manager.git
   ```

2. **Install Dependencies:**
   ```bash
   cd notes-management-backend
   npm install
   ```

3. **Environment Variables:**
   - Create a `.env` file with necessary configurations (database connection, JWT secret, etc.).

4. **Run the Application:**
   ```bash
   npm start
   ```

## Project Structure

```plaintext
src
│
├───core
│
├───databases
│   └───mongoDB
│
├───docs
│
├───interfaces
│
├───middlewares
│
├───models
│   ├───Note
│   └───User
│
├───modules
│   ├───auth
│   │   └───v1
│   ├───health-check
│   │   └───v1
│   ├───notes
│   │   └───v1
│   └───search
│       └───v1
│
└───utils
```

### Additional Information

- The repository includes a `.env.example` file as a template for required environment variables.

Feel free to contribute, report issues, or suggest improvements. Happy coding!
