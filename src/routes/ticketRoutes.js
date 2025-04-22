import express from "express";
import { ticketController } from "../controllers/ticketController.js";
import { validate, ticketValidator, replyValidator } from "../utils/validator.js";
import { authentificate } from "../middleware/authMiddleware.js";

export const router = express.Router();

router.get("/", authentificate, ticketController.getAllTickets);
router.get("/:id", authentificate, ticketController.getSingleTicket);
router.post("/", authentificate, validate(ticketValidator), ticketController.createTicket);
router.post("/:id/reply", authentificate, validate(replyValidator), ticketController.replyTicket);
router.put("/:id", authentificate, validate(ticketValidator), ticketController.updateTicket);
router.patch("/:id/close", authentificate, ticketController.closeTicket);
router.delete("/:id", authentificate, ticketController.deleteTicket);

export default router;
