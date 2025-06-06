# Movie Ticket Booking Web API

A secure and scalable backend API for a movie ticket booking system built with **Node.js**, **Express**, and **MongoDB**. It includes JWT-based login, role-based access, and CRUD operations for movies, theatres, and user-specific bookings.

---

## Tech Stack

| Technology   | Purpose                                           |
|--------------|---------------------------------------------------|
| Node.js      | JavaScript runtime for backend development        |
| Express.js   | Web framework for creating REST APIs              |
| MongoDB      | NoSQL database for flexible schema management     |
| Mongoose     | ODM to define schemas and perform DB operations   |
| JWT          | Token-based authentication and user roles         |
| bcryptjs     | Password hashing for secure user credentials      |
| dotenv       | Load environment variables securely               |
| nodemon      | Auto-restarts server during development           |

**Why this stack?**  
Chose Node.js and Express for rapid API development, MongoDB for schema flexibility and ease of modeling users/bookings, and JWT for modern, stateless authentication.

---

## Setup Instructions

### Prerequisites

- Node.js v14+
- MongoDB running locally (`mongodb://127.0.0.1:27017/cinema`) or MongoDB Atlas
- Postman or curl for testing APIs

###  Installation Steps

# 1. Clone the repository
```bash
git clone https://github.com/your-username/movie-ticket-api.git
cd movie-ticket-api
```

# 2. Install dependencies
```bash
npm install
```

# 3. Create a .env file with:
```bash
MONGODB_URI=mongodb://127.0.0.1:27017/cinema
JWT_SECRET=your_jwt_secret
PORT=3000
```
# 4. Run the backend service

```bash
npm run dev   # development (with nodemon)
# or
npm start     # production
```
## API Documentation
All APIs use JSON and most require JWT Authorization in the form:
```makefile
Authorization: Bearer <token>
```

# 1- Auth APIs

POST /auth/register
Create a new user (optional).

Request Body:
```bash
{
  "username": "johndoe",
  "password": "securepass",
  "role": "admin" // optional, default is 'user'
}
```
Success Response:
```bash
{ "message": "User registered successfully" }
```
POST /auth/login
Login and receive JWT token.

Request Body:
```bash
{
  "username": "johndoe",
  "password": "securepass"
}
```
Success Response:
```bash
{ "token": "<jwt_token>",
  "role" :"user"
 }

```
# 2- Movie APIs (Admin only)
All endpoints require admin JWT.

GET /movies
List all movies.

Success Response:
```bash
[{ "_id": "...", "title": "Inception", "genre": "Sci-Fi", "releaseYear": 2010 }]

```

POST /movies
Create a new movie.
```bash
{
  "title": "Dune",
  "genre": "Sci-Fi",
  "releaseYear": 2021
}
```
PUT /movies/:id
Update a movie.
```bash
{
  "title": "Updated Title"
}

```
DELETE /movies/:id
Delete a movie.

# 3- Theatre APIs (Admin only)
All endpoints require admin JWT.

GET /theatres
List all theatres.

POST /theatres
Create a new theatre.
```bash
{
  "name": "PVR Saket",
  "location": "Delhi",
  "seatingCapacity": 200
}

```
PUT /theatres/:id
Update a theatre.

DELETE /theatres/:id
Delete a theatre.

# 4- Booking APIs (User only)
All endpoints require user JWT.

GET /bookings
List your own bookings (auto-populates movie & theatre).

Response:
```bash
[
  {
    "_id": "...",
    "seats": 2,
    "movie": { "title": "Dune" },
    "theatre": { "name": "PVR Saket" }
  }
]

```

POST /bookings
Create a booking.
```bash
{
  "movie": "<movie_id>",
  "theatre": "<theatre_id>",
  "seats": 2
}
```

PUT /bookings/:id
Update your booking.

DELETE /bookings/:id
Cancel your booking.



## Testing
Use Postman or cURL to test endpoints with appropriate JWT tokens.



