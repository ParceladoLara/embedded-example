import { z } from "zod";

const required = "Campo obrigatório";

const newAppointmentSchema = z.object({
  patient: z.string().nonempty(required),
  cpf: z.string().nonempty(required),
  dateOfBirth: z.string().nonempty(required),
  cellphone: z.string().nonempty(required),
  email: z.string().email("E-mail inválido"),
  address: z.object({
    zip: z.string().nonempty(required),
    city: z.string().nonempty(required),
    state: z.string().nonempty(required),
    street: z.string().nonempty(required),
    number: z.string().nonempty(required),
    complement: z.string(),
  }),
});

const newAppointmentSchemaDefaultValues = {
  patient: "",
  cpf: "",
  dateOfBirth: "",
  cellphone: "",
  email: "",
  address: {
    zip: "",
    city: "",
    state: "",
    street: "",
    number: "",
    complement: undefined,
  },
};

type NewAppointmentFormSchema = z.infer<typeof newAppointmentSchema>;

export {
  newAppointmentSchema,
  newAppointmentSchemaDefaultValues,
  type NewAppointmentFormSchema,
};
