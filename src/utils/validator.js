import { body } from "express-validator";
import { validationResult } from "express-validator";

export const validate = (validator) => [
    ...validator,
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        next();
    },
];

const registerValidator = [
    body("username")
        .notEmpty()
        .withMessage("Vartotojo vardas privalomas")
        .isLength({ min: 6 })
        .withMessage("Vartotojo vardas turi būti bent 6 simbolių ilgio")
        .isAlphanumeric()
        .withMessage("Vartotojo vardas gali turėti tik raides ir skaičius"),

    body("password")
        .notEmpty()
        .withMessage("Slaptažodis privalomas")
        .isLength({ min: 8 })
        .withMessage("Slaptažodis turi būti bent 8 simbolių ilgio"),
];

const loginValidator = [
    body("username").notEmpty().withMessage("Vartotojo vardas privalomas"),
    body("password").notEmpty().withMessage("Slaptažodis privalomas"),
];

export const ticketValidator = [
    body("title")
        .notEmpty()
        .withMessage("Pavadinimas privalomas")
        .isLength({ max: 255 })
        .withMessage("Pavadinimas turi būti ne ilgesnis nei 255 simboliai"),
    body("description")
        .notEmpty()
        .withMessage("Aprašymas privalomas")
        .isLength({ min: 10 })
        .withMessage("Aprašymas turi būti bent 10 simbolių ilgio"),
    body("status")
        .optional()
        .isIn(["NEW", "ANSWERED", "CLOSED"])
        .withMessage("Statusas turi būti 'NEW', 'ANSWERED' arba 'CLOSED'"),
];

export const authValidators = {
    registerValidator,
    loginValidator,
};
