import express from "express";
import { getExample, postExample } from "../controllers/example.controller.js";
import { validate } from "../middlewares/validate.js";
import { exampleSchema } from "../validations/example.validation.js";

const router = express.Router();

router.get("/", getExample);

// POST route with Joi validation
router.post("/", validate(exampleSchema), postExample);

export default router;