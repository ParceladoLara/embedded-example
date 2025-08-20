import type { GetPatientsResponseType } from "./GetPatientsResponseType";

export interface GetAppointmentsResponseType {
  id: number;
  value: number;
  patient_id: number;
  lara_proposal_id: string | null;
  lara_proposal_status: string | null;
  patient?: GetPatientsResponseType;
}
