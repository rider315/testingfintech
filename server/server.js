require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const bondRouter = require("./router/bond-router"); // Import the bond router
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const adminRoute = require("./router/admin-router");

// CORS Configuration (Adjust as needed for your specific requirements)
app.use(
  cors({
    origin: "*", // Be more restrictive in production
  })
);

app.use(express.json());

// Mount routers
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use("/api/bonds", bondRouter); // Use the bond router

// Error handling middleware (should be placed after all routes)
app.use(errorMiddleware);

const PORT = process.env.PORT || 5002;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});