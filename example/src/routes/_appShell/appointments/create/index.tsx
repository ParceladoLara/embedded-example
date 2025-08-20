"use client";

import AddressDataForm from "@/common/components/NewAppointment/AddressDataForm";
import PersonalDataForm from "@/common/components/NewAppointment/PersonalDataForm";
import {
  newAppointmentSchema,
  newAppointmentSchemaDefaultValues,
  type NewAppointmentFormSchema,
} from "@/common/components/NewAppointment/schema";
import { Button } from "@/common/components/shadcn/ui/button";
import { CreateAppointment } from "@/common/services/createAppointment.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm, FormProvider } from "react-hook-form";

export const Route = createFileRoute("/_appShell/appointments/create/")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();

  const form = useForm<NewAppointmentFormSchema>({
    resolver: zodResolver(newAppointmentSchema),
    defaultValues: newAppointmentSchemaDefaultValues,
  });

  const {
    mutate: createAppointmentMutate,
    isPending: createAppointmentIsLoading,
  } = CreateAppointment();

  const onSubmit = (values: NewAppointmentFormSchema): void => {
    if (!values?.patient) return;

    createAppointmentMutate(
      { patient_id: Number(values.patient) },
      {
        onSuccess(res) {
          navigate({ to: `/appointments/confirm/${res.id}` });
        },
      }
    );
  };

  return (
    <div className="flex flex-1 flex-col p-10 gap-10">
      <h1 className="text-3xl font-bold">Novo agendamento</h1>

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-16"
        >
          <div className="w-full grid grid-cols-2 gap-16">
            <PersonalDataForm />
            <AddressDataForm />
          </div>
          <div className="flex justify-center">
            <Button disabled={createAppointmentIsLoading} type="submit">
              {createAppointmentIsLoading
                ? "Carregando..."
                : "Salvar agendamento"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
