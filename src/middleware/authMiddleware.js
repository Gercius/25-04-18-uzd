import jwt from "jsonwebtoken";
import { promisify } from "node:util";

export const authentificate = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) res.status(401).json({ message: "Invalid token" });

    const token = authHeader.split(" ")[1];
    if (!token || token === "undefined" || token === undefined) throw new Error("User not authentificated");

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            error: error.message,
        });
    }
};
