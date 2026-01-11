import mongoose, {Document, Schema} from "mongoose";
import { generalInviteCode } from "../utils/uuid";

export interface WorkspaceDocument extends Document {
    name: String;
    description: String;
    owner: mongoose.Types.ObjectId;
    inviteCode: String;
    createdAt: String;
    updatedAt: String;
}


const workspaceSchema = new Schema<WorkspaceDocument>({
    name: {type: String, required: true},
    description: {type: String, required: false },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    inviteCode: {
        type: String,
        required: true,
        unique: true,
        default: generalInviteCode,
    },
},
{
    timestamps: true,
}
);

workspaceSchema.methods.resetInviteCode = function() {
    this.inviteCode = generalInviteCode();
};

const WorkspaceModel = mongoose.model<WorkspaceDocument>(
  "Workspace",
  workspaceSchema
);

export default WorkspaceModel;
