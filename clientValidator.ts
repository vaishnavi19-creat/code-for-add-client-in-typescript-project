import { body } from 'express-validator';

export const clientValidator = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 3, max: 100 })
        .withMessage('Name should be between 3 and 100 characters'),

    body('mobileNo')
        .trim()
        .notEmpty()
        .withMessage('Mobile number is required')
        .isLength({ min: 10, max: 15 })
        .withMessage('Mobile number should be between 10 and 15 digits')
        .isNumeric()
        .withMessage('Mobile number must be numeric'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Invalid email format'),

    body('adharcard')
        .trim()
        .notEmpty()
        .withMessage('Aadhar card number is required')
        .isLength({ min: 12, max: 12 })
        .withMessage('Aadhar card number must be 12 digits')
        .isNumeric()
        .withMessage('Aadhar card number must be numeric'),

    body('address')
        .trim()
        .notEmpty()
        .withMessage('Address is required')
        .isLength({ min: 10, max: 500 })
        .withMessage('Address should be between 10 and 500 characters'),

    body('panNo')
        .trim()
        .notEmpty()
        .withMessage('PAN number is required')
        .isLength({ min: 10, max: 10 })
        .withMessage('PAN number must be 10 characters')
        .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}/)
        .withMessage('PAN number must be in the correct format'),

    body('logo')
        .optional()
        .trim()
        .isURL()
        .withMessage('Logo must be a valid URL'),
];
