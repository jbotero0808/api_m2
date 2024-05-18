import { Request, Response } from "express";
import Team from "../../models/team.model";

export const getTeams = async (req: Request, res: Response) => {
  try {
    const team = await Team.find();
    res.status(200).json(team);
  } catch (error) {
    res.status(500).send("Error al traer los equipos");
  }
};

export const createTeam = async (req: Request, res: Response) => {
  try {
    const { idTeam, nameTeam, colorTeam } = req.body;
    const team = new Team({ idTeam, nameTeam, colorTeam });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).send("Error con la creacion del equipo");
  }
};

export const getTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id);
    res.status(200).json(team);
  } catch (error) {
    res.status(500).send("Error al obtener el equipo");
  }
};

export const updateTeams = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nameTeam, colorTeam, categoriaTeam } = req.body;
    const team = await Team.findByIdAndUpdate(id, { nameTeam, colorTeam, categoriaTeam }, { new: true});
    //res.status(200).json(team);
    res.redirect("/team");
  } catch (error) {
    return res.status(404).send("Equipo no encontrado");
  }
};

export const deleteTeam = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Team.findByIdAndDelete(id);
    res.status(204).send("Se elimino la publicacion");
  } catch (error) {
    return res.status(404).send("Equino no encontrad0");
  }
};
