import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { GetAppointmentsResponseType } from "../types/GetAppointmentsResponseType";

export function GetAppointment(
  id: number
): UseQueryResult<GetAppointmentsResponseType, Error> {
  return useQuery<GetAppointmentsResponseType, Error>({
    queryKey: ["appointment", id],
    queryFn: async () => {
      const { data } = await api.get<GetAppointmentsResponseType>(
        `/appointment/${id}`
      );
      return data;
    },
    enabled: !!id,
  });
}
