import express from "express";
import {
  createTeam,
  deleteTeam,
  getTeam,
  getTeams,
  updateTeams,
} from "../controllers/team.controller";

import { verifyJWT } from "../controllers/auth.controller";

const router = express.Router();

router.get("/", verifyJWT, createTeam);
router.post("/", verifyJWT, getTeams);
router.get("/:id", verifyJWT, getTeam);
router.post("/:id", verifyJWT, updateTeams);
router.delete("/:id", verifyJWT, deleteTeam);

export default router;
