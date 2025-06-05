# Movie Ticket Booking API

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
