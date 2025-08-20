import { z } from "zod";

const required = "Campo obrigatório";

const ConfirmAppointmentSchema = z.object({
  treatment: z.string().nonempty(required),
  value: z.string().nonempty(required),
});

const ConfirmAppointmentSchemaDefaultValues = {
  treatment: "",
  value: "",
};

type ConfirmAppointmentFormSchema = z.infer<typeof ConfirmAppointmentSchema>;

export {
  ConfirmAppointmentSchema,
  ConfirmAppointmentSchemaDefaultValues,
  type ConfirmAppointmentFormSchema,
};
