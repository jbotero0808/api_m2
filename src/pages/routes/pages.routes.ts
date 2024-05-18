import express from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import teamRoutes from "./team.routes";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/team", teamRoutes);

export default router;
