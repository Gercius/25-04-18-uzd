import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../utils/prismaClient.js";

export const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashed = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: {
                username,
                password: hashed,
            },
        });
        res.status(201).json({ message: "Registracija sėkminga", user: { id: user.id, username: user.username } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) return res.status(404).json({ message: "Vartotojas nerastas" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: "Neteisingas slaptažodis" });

        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.json({ message: "Prisijungimas sėkmingas", token, user: { id: user.id, username: user.username } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
