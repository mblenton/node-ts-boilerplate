import express from "express";
import { check } from "express-validator";
import * as homeController from "../../controllers/home";

const router = express.Router();

router.get("/", homeController.index);

router.post(
  "/user",
  [
    // username must be an email
    check("username").isEmail(),
    // password must be at least 5 chars long
    check("password").isLength({ min: 5 }),
  ],
  homeController.testPost
);

export default router;
