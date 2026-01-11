import { Router } from "express";
import { changeWorkspaceMemberRoleController, createWorkspaceController, deleteWorkspaceByIdController, getAllWorkspaceUserIsMemberController, getWorkspaceAnalyticsController, getWorkspaceByIdController, getWorkspaceMemberController, updateWorkspaceByIdController } from "../controllers/workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);
workspaceRoutes.put("/update/:id", updateWorkspaceByIdController);

workspaceRoutes.put("/change/member/role/:id", changeWorkspaceMemberRoleController);

workspaceRoutes.delete("/delete/:id", deleteWorkspaceByIdController)

workspaceRoutes.get("/all", getAllWorkspaceUserIsMemberController);

workspaceRoutes.get("/members/:id", getWorkspaceMemberController);
workspaceRoutes.get("/analytics/:id", getWorkspaceAnalyticsController);

workspaceRoutes.get("/:id", getWorkspaceByIdController);


export default workspaceRoutes;