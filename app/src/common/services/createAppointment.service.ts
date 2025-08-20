import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { api } from "../config/api";
import type { GetAppointmentsResponseType } from "../types/GetAppointmentsResponseType";

export interface CreateAppointmentDTO {
  patient_id: number;
}

export function CreateAppointment(): UseMutationResult<
  GetAppointmentsResponseType,
  Error,
  CreateAppointmentDTO
> {
  return useMutation({
    mutationFn: async (newAppointment: CreateAppointmentDTO) => {
      const { data } = await api.post<GetAppointmentsResponseType>(
        "/appointment",
        newAppointment
      );
      return data;
    },
  });
}
