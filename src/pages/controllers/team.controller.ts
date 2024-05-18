import { Request, Response } from "express";
import Team from "../../models/team.model";

export const getAllTeams = async (req: Request, res: Response) => {
  try {
    const teams = await Team.find();
    res.render('team/index', { teams });
  } catch (error) {
    res.status(500).send('Error');
  }
};

export const pageUpdateTeam = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const team = await Team.findById(id);
      res.render('team/edit', { team });
  } catch (error) {
      res.status(500).send('Error');
  }
};



