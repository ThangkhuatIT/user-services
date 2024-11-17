import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const checkValidationResult = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).json({
      message: "Validation failed",
      errors: errors.array().map((e) => e.msg),
    });
    return;
  }

  next();
};

export const validateUpdateProfile = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 2, max: 30 })
      .withMessage("Name must be between 2 and 30 characters")
      .matches(/^[A-Za-z0-9 ]+$/)
      .withMessage("Name cannot contain special characters"),
    ,
    body("websiteUrl").optional().isURL().withMessage("Invalid URL format"),
    body("youtubeUrl").optional().isURL().withMessage("Invalid URL format"),
    body("facebookUrl ").optional().isURL().withMessage("Invalid URL format"),
    body("linkedInUrl").optional().isURL().withMessage("Invalid URL format"),
  ];
};
