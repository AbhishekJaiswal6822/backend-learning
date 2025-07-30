# Backend with Javascript

-[Model Link](https://app.eraser.io/workspace/04i2SN7A8dDXe8VsXJkK?origin=share)

## utils 

-- repetead functionalities such as file uploading


## ✅ MongoDB Atlas to Express Server: Database Connection Flow

This guide outlines the step-by-step process of connecting MongoDB Atlas with an Express server using Mongoose.

---

### 1️⃣ MongoDB Atlas

- Create a **cluster** and a **database**
- Create a **user** and set a **password**
- Get the **MongoDB connection string (Mongo URI)** from the Atlas dashboard  
  _Example_:  
  `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>`

---

### 2️⃣ .env File

Create a `.env` file in your project root to store sensitive environment variables:

```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
PORT=8000
3️⃣ Install Required Packages
Install dotenv and mongoose:

bash
Copy
Edit
npm install dotenv mongoose
4️⃣ index.js (Express Server Setup)
js
Copy
Edit
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');

  // Start server after successful DB connection
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error);
});
5️⃣ Mongoose Connection
✅ If successful → Server starts and logs success message

❌ If failed → Error is logged to console

6️⃣ Server is Running 🚀
Connected to MongoDB

Ready to handle API requests