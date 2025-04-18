import express from "express";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Helpdesk API servisas");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
