import mongoose, {Schema, Document} from "mongoose";

interface ITeam extends Document {
    nameTeam: string;
    colorTeam: string;
    categoriaTeam: string;
}

const teamSchema = new Schema<ITeam>({
    nameTeam: {type: String, required: true},
    colorTeam: {type: String, required: false},
    categoriaTeam: {type: String, required: false}
});

export default mongoose.model<ITeam>("Team", teamSchema);