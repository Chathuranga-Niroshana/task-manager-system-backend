This is a RESTful API built with Node.js, Express.js, and MongoDB (Mongoose) for managing tasks.  
It has creating, reading, updating, and deleting tasks functions with proper input validation and error handling.


I used these technologies for this implementation.
 Node.js
 Express.js
 MongoDB + Mongoose
 dotenv
 morgan (for logging)
 nodemon

I used an error handling middleware to handle server errors. - src/middlewares/errorMiddleware.js.
The create & update requests validate the status types, and if it is wrong then the the server sends 400 error code with message with invalid status.
the status are stored inside the constants folder and also it is used as enum.

for run application
1. create .env file. 
    eg:
    PORT = 8000
    MONGO_URI=mongodb://localhost:27017/taskdb


2. npm install
3. npm run dev    // this will run with nodemon
(optional:) npm start    // this will start the server


github repository:  https://github.com/Chathuranga-Niroshana/task-manager-system-backend.git


J.M. Chathuranga Niroshana
niroshana.c.n.j@gmail.com