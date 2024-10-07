import express from "express";
const userRoutes = express.Router();
import {
    authUser,
    getUserProfile,
    logoutUser,
    updateUserProfile,
    registerUser,
} from "../controllers/userControllers.js";

userRoutes.post("/", registerUser);
userRoutes.post("/auth", authUser);
userRoutes.post("/logout", logoutUser);
userRoutes.route("/profile").get(getUserProfile).put(updateUserProfile);

export default userRoutes;
