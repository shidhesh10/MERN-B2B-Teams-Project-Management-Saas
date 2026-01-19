import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";

const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteTaskMutationFn,
    onSuccess: (data, variables) => {
      // 1. Invalidate the 'all-tasks' query so the list updates instantly
      queryClient.invalidateQueries({
        queryKey: ["all-tasks", variables.workspaceId],
      });
      
      // 2. Also invalidate project analytics if you are on a project page
      queryClient.invalidateQueries({
        queryKey: ["project-analytics"],
      });

      toast({
        title: "Success",
        description: data.message,
        variant: "success",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to delete task",
        variant: "destructive",
      });
    },
  });

  return mutation;
};

export default useDeleteTask;