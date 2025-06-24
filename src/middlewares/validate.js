import Joi from "joi";

export const validate = (schema) => {
  return (req, res, next) => {
    const validationOptions = {
      abortEarly: false, // Include all errors
      allowUnknown: true, // Allow unknown keys that are not in the schema
      stripUnknown: true, // Remove unknown keys from the validated data
    };

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "Request body is required",
      });
    }

    const { error, value } = schema.validate(req.body, validationOptions);

    if (error) {
      // Return validation errors
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.details.map((err) => err.message),
      });
    }

    // Replace the request body with the validated data
    req.body = value;
    next();
  };
};