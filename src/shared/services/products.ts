import { axiosInstance } from "@/shared/services/axios";
import { ApiRoutes } from "@/shared/services/constants";
import { Product } from "@prisma/client";
export const search = async (query: string): Promise<Product[]> => {
  const { data } = await axiosInstance.get<Product[]>(
    ApiRoutes.SEARCH_PRODUCTS,
    {
      params: { query },
    },
  );

  return data;
};
