import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { GetPatientsResponseType } from "../types/GetPatientsResponseType";

export function GetPatients(): UseQueryResult<
  GetPatientsResponseType[],
  Error
> {
  return useQuery<GetPatientsResponseType[], Error>({
    queryKey: ["patients"],
    queryFn: async () => {
      const { data } = await api.get<GetPatientsResponseType[]>("/patients");
      return data;
    },
  });
}
