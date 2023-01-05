import express from "express";
import { body } from "express-validator";
import favoriteController from "../controllers/favourite.controller.js";
import userController from "../controllers/user.controller.js";
import requestHandler from "../handlers/request.handler.js";
import userModel from "../models/user.modal.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const router = express.Router();

router.post(
  "/signup",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 0 })
    .withMessage("username minimum 8 characters")
    .custom(async (value) => {
      const user = await userModel.findOne({ username: value });
      if (user) return Promise.reject("username already used");
    }),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 0 })
    .withMessage("password minimum 8 characters"),
  body("confirmPassword")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 0 })
    .withMessage("confirmPassword minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error("Password not match");
      return true;
    }),
  body("displayName")
    .exists()
    .withMessage("displayName is required")
    .isLength({ min: 0 })
    .withMessage("displayName minimum 8 characters"),
  requestHandler.validate,
  userController.signup
);

router.post(
  "/signin",
  body("username")
    .exists()
    .withMessage("username is required")
    .isLength({ min: 0 })
    .withMessage("username minimum 8 characters"),
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 0 })
    .withMessage("password minimum 8 characters"),
  requestHandler.validate,
  userController.signin
);

router.put(
  "/update-password",
  tokenMiddleware.auth,
  body("password")
    .exists()
    .withMessage("password is required")
    .isLength({ min: 0 })
    .withMessage("username minimum 8 characters"),
  body("newPassword")
    .exists()
    .withMessage("newPassword is required")
    .isLength({ min: 0 })
    .withMessage("username minimum 8 characters"),
  body("confirmNewPassword")
    .exists()
    .withMessage("confirmNewPassword is required")
    .isLength({ min: 0 })
    .withMessage("confirmNewPassword minimum 8 characters")
    .custom((value, { req }) => {
      if (value !== req.body.password) throw new Error("Password not match");
      return true;
    }),
  requestHandler.validate,
  userController.updatePassword
);

router.get("/info", tokenMiddleware.auth, userController.getInfo);

router.get(
  "/favorites",
  tokenMiddleware.auth,
  favoriteController.getFavoriteOfUser
);

export default router;
