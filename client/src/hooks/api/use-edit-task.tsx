import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editTaskMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const useEditTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: editTaskMutationFn,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["all-tasks", variables.workspaceId],
      });
      
      queryClient.invalidateQueries({
        queryKey: ["project-analytics"],
      });

      toast({
        title: "Success",
        description: "Task updated successfully",
        variant: "success",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to update task",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useEditTask;