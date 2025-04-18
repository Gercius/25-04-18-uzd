import { body } from "express-validator";

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
        .notEmpty().withMessage("Vartotojo vardas privalomas")
        .isLength({ min: 6 }).withMessage("Vartotojo vardas turi būti bent 6 simbolių ilgio")
        .isAlphanumeric().withMessage("Vartotojo vardas gali turėti tik raides ir skaičius"),
        
        body("password")
        .notEmpty().withMessage("Slaptažodis privalomas")
        .isLength({ min: 8 }).withMessage("Slaptažodis turi būti bent 8 simbolių ilgio")
];

const loginValidator = [
    body("username")
        .notEmpty().withMessage("Vartotojo vardas privalomas"),

    body("password")
        .notEmpty().withMessage("Slaptažodis privalomas")
];

export const validator = {
    registerValidator,
    loginValidator
}