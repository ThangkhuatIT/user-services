import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const checkValidationResult = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({ 
            message: "Validation failed",
            errors: errors.array().map((e) => e.msg) 
        });
        return;
    }

    next();
};

export const validateUpdateProfile = () => {
    return [
        body("name", "name must be Alphanumeric").optional().isAlphanumeric("vi-VN", {
            ignore: " ",
        }),
    ];
};