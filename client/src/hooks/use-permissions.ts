import { PermissionType } from "@/constant";
import { UserType, WorkspaceWithMembersType } from "@/types/api.type";
import { useEffect, useMemo, useState } from "react";

const usePermissions = (
    user: UserType | undefined,
    workspace: WorkspaceWithMembersType | undefined,
) => {
    const [permissions, setPermissions] = useState<PermissionType[]>([]);

    useEffect(() => {
    if (user && workspace && workspace.members) {
      // 👇 FIX: Handle both String ID and Populated Object ID
      const member = workspace.members.find((member) => {
        const memberId =
          typeof member.userId === "object"
            ? (member.userId as any)._id
            : member.userId;

        return memberId === user._id;
      });

      if (member) {
        setPermissions(member.role.permissions || []);
      } else {
        setPermissions([]); // Clear permissions if not found
      }
    }
  }, [user, workspace]);

    return useMemo(() => permissions, [permissions])
}

export default usePermissions;