/**
 *
 * The server.js file should be located at the top level of your backend project.
 * This is a common convention that keeps the entry point of your application easily accessible and distinct from other parts of your project.
 *
 */

import express from "express";
import json from "express";

// Importing sequlaize Instance
import { sync } from "./database/connection"; // Sequelize instance
require("dotenv").config();
const app = express();
const PORT = process.env.DB_PORT || 5000;

// Import routes
import alumniRoutes from "./routes/Alumni_Routes.js";
import alumniOfficerRoutes from "./routes/AlumniOfficer_Routes";
import educationalQualificationRoutes from "./routes/EducationalQualification_Routes";
import employmentStatusRoutes from "./routes/EmploymentStatus_Routes";

// Middleware
app.use(json());

// Using Routes
app.use("/alumni", alumniRoutes);
app.use("/alumni-officer", alumniOfficerRoutes);
app.use("/educational-qualification", educationalQualificationRoutes);
app.use("/employment-status", employmentStatusRoutes);

// Sync Sequelize models and start server
sync()
    .then(() => {
        console.log("Database & tables created!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error);
    });
