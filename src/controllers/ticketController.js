import { prisma } from "../utils/prismaClient.js";

const getAllTickets = async (req, res) => {
    try {
        const tickets = await prisma.ticket.findMany({
            where: {
                authorId: req.user.id,
            },
            include: {
                user: {
                    select: {
                        username: true,
                    },
                },
            },
        });
        res.status(200).json({ tickets });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getSingleTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await prisma.ticket.findUnique({
            where: { id: parseInt(id), authorId: parseInt(req.user.id) },
            include: {
                user: {
                    select: {
                        username: true,
                    },
                },
            },
        });

        if (!ticket) {
            return res.status(404).json({ message: "Nėra tokios užklausos arba ji nepriklauso šiam vartotojui" });
        }

        res.status(200).json(ticket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const createTicket = async (req, res) => {
    const { title, description, status } = req.body;

    console.log(title, description, status);
    console.log(req?.user?.id);

    try {
        const ticket = await prisma.ticket.create({
            data: {
                title,
                description,
                status: status || "NEW",
                authorId: req.user.id,
            },
        });
        res.status(201).json(ticket);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(id) } });
        if (!ticket || ticket.authorId !== req.user.id) {
            return res.status(403).json({ message: "Užklausa nerasta arba nesate šios užklausos savininkas" });
        }

        const updated = await prisma.ticket.update({
            where: { id: parseInt(id) },
            data: req.body,
        });
        res.status(201).json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(id) } });
        if (!ticket || ticket.authorId !== req.user.id) {
            return res.status(403).json({ message: "Užklausa nerasta arba nesate šios užklausos savininkas" });
        }

        await prisma.ticket.delete({ where: { id: parseInt(id) } });
        res.status(204).json({ message: "Ištrinta" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const replyTicket = async (req, res) => {
    const { id } = req.params;
    const { message } = req.body;

    try {
        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(id) } });

        if (!ticket) return res.status(404).json({ message: "Užklausa nerasta" });
        if (ticket.status === "CLOSED") return res.status(403).json({ message: "Užklausa uždaryta" });

        const reply = await prisma.reply.create({
            data: {
                message,
                authorId: req.user.id,
                ticketId: ticket.id,
            },
        });

        await prisma.ticket.update({
            where: { id: ticket.id },
            data: {
                status: "ANSWERED",
            },
        });

        res.status(201).json(reply);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const closeTicket = async (req, res) => {
    const { id } = req.params;

    try {
        const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(id) } });
        if (!ticket || ticket.authorId !== req.user.id) {
            return res.status(403).json({ message: "Užklausa nerasta arba nesate šios užklausos savininkas" });
        }

        await prisma.ticket.update({
            where: { id: ticket.id },
            data: {
                status: "CLOSED",
            },
        });

        res.status(201).json({ message: "Užbaigta" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const ticketController = {
    getAllTickets,
    getSingleTicket,
    createTicket,
    updateTicket,
    deleteTicket,
    replyTicket,
    closeTicket,
};
