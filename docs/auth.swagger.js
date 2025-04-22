/**
 * @swagger
 * /api/v1/auth/register:
 *  post:
 *    summary: User registration
 *    tags: [Auth]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [username, password]
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: Registration successful
 */

/**
 * @swagger
 * /api/v1/auth/login:
 *  post:
 *    summary: User login
 *    tags: [Auth]
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required: [username, password]
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: Login successful
 */
