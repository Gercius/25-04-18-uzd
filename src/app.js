import express from "express";

import authRoutes from "./routes/authRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

export const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tickets", ticketRoutes);

app.get("/", (req, res) => {
    res.send("Helpdesk API servisas");
});
