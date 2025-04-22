/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket management system
 */

/**
 * @swagger
 * /api/v1/tickets:
 *   get:
 *     summary: Get all tickets for the authenticated user
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tickets
 *       401:
 *         description: Unauthorized
 *
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [NEW, ANSWERED, CLOSED]
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/tickets/{id}:
 *   get:
 *     summary: Get a single ticket by ID (if owned by the user)
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket found
 *       404:
 *         description: Ticket not found or unauthorized access
 *       401:
 *         description: Unauthorized
 *
 *   put:
 *     summary: Update a ticket by ID (if owned by the user)
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [NEW, ANSWERED, CLOSED]
 *     responses:
 *       201:
 *         description: Ticket updated
 *       403:
 *         description: Unauthorized to update this ticket
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *
 *   delete:
 *     summary: Delete a ticket by ID (if owned by the user)
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       403:
 *         description: Unauthorized to delete this ticket
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/tickets/{id}/reply:
 *   post:
 *     summary: Reply to a ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - message
 *             properties:
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Reply created
 *       404:
 *         description: Ticket not found
 *       403:
 *         description: Ticket is closed
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/tickets/{id}/close:
 *   patch:
 *     summary: Close a ticket
 *     tags: [Tickets]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       201:
 *         description: Ticket closed
 *       403:
 *         description: Unauthorized to close this ticket
 *       401:
 *         description: Unauthorized
 */
