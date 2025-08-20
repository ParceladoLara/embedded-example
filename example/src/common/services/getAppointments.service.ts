import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { GetAppointmentsResponseType } from "../types/GetAppointmentsResponseType";

export function GetAppointments(): UseQueryResult<
  GetAppointmentsResponseType[],
  Error
> {
  return useQuery<GetAppointmentsResponseType[], Error>({
    queryKey: ["appointments"],
    queryFn: async () => {
      const { data } =
        await api.get<GetAppointmentsResponseType[]>("/appointments");
      return data;
    },
  });
}
