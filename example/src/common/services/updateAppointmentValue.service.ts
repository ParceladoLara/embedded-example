import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { GetAppointmentsResponseType } from "../types/GetAppointmentsResponseType";

export interface UpdateAppointmentValueDTO {
  id: number;
  value: number;
}

export function UpdateAppointmentValue(): UseMutationResult<
  GetAppointmentsResponseType,
  Error,
  UpdateAppointmentValueDTO
> {
  return useMutation({
    mutationFn: async (update: UpdateAppointmentValueDTO) => {
      const { data } = await api.patch<GetAppointmentsResponseType>(
        "/appointment",
        update
      );
      return data;
    },
  });
}
