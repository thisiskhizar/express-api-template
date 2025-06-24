import Joi from "joi";

export const exampleSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must be at least 3 characters long",
    "string.max": "Name must be at most 30 characters long",
    "any.required": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid email address",
    "any.required": "Email is required",
  }),
  age: Joi.number().integer().min(18).max(100).optional().messages({
    "number.base": "Age must be a number",
    "number.min": "Age must be at least 18",
    "number.max": "Age must be at most 100",
  }),
});