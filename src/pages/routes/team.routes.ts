import express from "express";
import { getAllTeams, pageUpdateTeam } from "../controllers/team.controller";
import { verifyJWT } from '../../api/controllers/auth.controller';

const router = express.Router();

router.get("/", getAllTeams);
router.get('/edit/:id', verifyJWT, pageUpdateTeam);

export default router;
