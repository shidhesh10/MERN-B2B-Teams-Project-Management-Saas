import { required } from "zod/v4/core/util.cjs";
import { PermissionType } from "../enums/role.enum";
import { RolePermissions } from "./role-permission";
import { permission } from "node:process";
import { UnauthorizedException } from "./appError";


export const roleGuard = (
    role: keyof typeof RolePermissions,
    requiredPermission: PermissionType[]
) => {
    const Permissions = RolePermissions[role]
    // If the role doesn't exist or lacks required permissions, throw an exception

    const hasPermission = requiredPermission.every((permission) =>
        Permissions.includes(permission)
    );

    if(!hasPermission) {
        throw new UnauthorizedException("You do not have the necessary permission to perform this action")
    }
};