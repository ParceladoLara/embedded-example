"use client";

import { Button } from "@/common/components/shadcn/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/shadcn/ui/form";
import { Input } from "@/common/components/shadcn/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { UpdateAppointmentValue } from "@/common/services/updateAppointmentValue.service";
import type { GetAppointmentsResponseType } from "@/common/types/GetAppointmentsResponseType";
import { useQueryClient } from "@tanstack/react-query";
import {
  ConfirmAppointmentSchema,
  ConfirmAppointmentSchemaDefaultValues,
  type ConfirmAppointmentFormSchema,
} from "../schema";
import { useNavigate } from "@tanstack/react-router";

const treatments = [
  { id: "1", name: "Limpeza Dental", value: "1500" },
  { id: "3", name: "Restauração", value: "2000" },
  { id: "2", name: "Extração", value: "3000" },
  { id: "4", name: "Implante", value: "4000" },
];

interface ConfirmAppointmentFormProps {
  appointmentId: number;
  appointment: GetAppointmentsResponseType | undefined;
}

export default function ConfirmAppointmentForm({
  appointmentId,
  appointment,
}: ConfirmAppointmentFormProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: updateAppointmentValue,
    isPending: updateAppointmentValueIsLoading,
  } = UpdateAppointmentValue();

  const form = useForm<ConfirmAppointmentFormSchema>({
    resolver: zodResolver(ConfirmAppointmentSchema),
    defaultValues: ConfirmAppointmentSchemaDefaultValues,
  });

  const onSubmit = (values: ConfirmAppointmentFormSchema) => {
    if (!values?.value) return;

    updateAppointmentValue(
      { id: appointmentId, value: Number(values.value) },
      {
        onSuccess() {
          queryClient.invalidateQueries({
            queryKey: ["appointment", appointmentId],
          });
        },
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        {/* Select de Tratamento */}
        <FormField
          control={form.control}
          name="treatment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tratamento</FormLabel>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);

                    const selected = treatments.find((t) => t.id === value);
                    if (selected) {
                      form.setValue("value", selected.value);
                    }
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um tratamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {treatments.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Valor */}
        <FormField
          control={form.control}
          name="value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input placeholder="R$ 0,00" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {!appointment?.value ? (
          <Button
            type="submit"
            disabled={updateAppointmentValueIsLoading}
            className="bg-green-600 hover:bg-green-700 cursor-pointer"
          >
            {updateAppointmentValueIsLoading
              ? "Carregando..."
              : "Confirmar Agendamento"}
          </Button>
        ) : null}
        {appointment?.value ? (
          <Button
            type="button"
            className="bg-violet-600 hover:bg-violet-700 cursor-pointer"
            onClick={() =>
              navigate({ to: `/lara-proposal/initialize/${appointmentId}` })
            }
          >
            Financiar tratamento
          </Button>
        ) : null}
      </form>
    </Form>
  );
}
