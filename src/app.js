import express from "express";

import authRoutes from "./routes/authRoutes.js";

export const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Helpdesk API servisas");
});
