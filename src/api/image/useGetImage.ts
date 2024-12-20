import { apiRoutes } from "@api/apiRoutes";
import api from "@api/fetcher";
import { useQuery } from "@tanstack/react-query";
import { GetImageResponse } from "src/types/imageTypes";

const getImage = async (tempId: string) => {
  try {
    const { data }: { data: GetImageResponse[] } = await api.get({
      endpoint: `${apiRoutes.images}/${tempId}`,
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetImage = (tempId: string) => {
  return useQuery({
    queryKey: ["images", tempId],
    queryFn: () => getImage(tempId),
    staleTime: Infinity,
  });
};
