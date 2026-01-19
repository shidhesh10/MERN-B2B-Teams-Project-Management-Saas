import { useState } from "react";
import { Row } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ConfirmDialog } from "@/components/resuable/confirm-dialog";
import { TaskType } from "@/types/api.type";
import useWorkspaceId from "@/hooks/use-workspace-id";
import useDeleteTask from "@/hooks/api/use-delete-task";
import EditTaskDialog from "../edit-task-dialog";

interface DataTableRowActionsProps {
  row: Row<TaskType>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false); //
  
  const workspaceId = useWorkspaceId();
  const { mutate, isPending } = useDeleteTask();

  const task = row.original;
  const taskId = task._id;
  const taskCode = task.taskCode;

  const handleConfirm = () => {
    mutate(
      { workspaceId, taskId },
      {
        onSuccess: () => {
          setOpenDeleteDialog(false);
        },
      }
    );
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem 
            className="cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                setOpenEditDialog(true);
            }}
          >
            <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Edit Task
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          
          <DropdownMenuItem
            className="text-destructive focus:text-destructive cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                setOpenDeleteDialog(true);
            }}
          >
            <Trash className="mr-2 h-3.5 w-3.5" />
            Delete Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmDialog
        isOpen={openDeleteDialog}
        isLoading={isPending}
        onClose={() => setOpenDeleteDialog(false)}
        onConfirm={handleConfirm}
        title="Delete Task"
        description={`Are you sure you want to delete task ${taskCode}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />

      <EditTaskDialog 
        isOpen={openEditDialog}
        onClose={() => setOpenEditDialog(false)}
        task={task}
      />
    </>
  );
}