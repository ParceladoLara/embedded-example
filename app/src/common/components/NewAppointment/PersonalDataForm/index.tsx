"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/shadcn/ui/select";
import { GetPatients } from "@/common/services/getPatients.service";
import { Input } from "../../shadcn/ui/input";
import { type NewAppointmentFormSchema } from "../schema";
import { useFormContext } from "react-hook-form";

export default function PersonalDataForm() {
  const form = useFormContext<NewAppointmentFormSchema>();

  const { data: patients } = GetPatients();

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="font-semibold text-lg">Dados Pessoais:</h1>

      {/* Select de Paciente */}
      <FormField
        control={form.control}
        name="patient"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Paciente</FormLabel>
            <Select
              onValueChange={(value) => {
                field.onChange(value);

                const selected = patients?.find((p) => String(p.id) === value);

                if (selected) {
                  form.setValue("cpf", selected.cpf);
                  form.setValue("dateOfBirth", selected.dateOfBirth);
                  form.setValue("cellphone", selected.cellphone);
                  form.setValue("email", selected.email);
                  form.setValue("address.zip", selected?.address?.zip ?? "");
                  form.setValue(
                    "address.complement",
                    selected?.address?.complement ?? ""
                  );
                  form.setValue(
                    "address.number",
                    selected?.address?.number?.toString() ?? ""
                  );
                  form.setValue(
                    "address.state",
                    selected?.address?.state ?? ""
                  );
                  form.setValue(
                    "address.street",
                    selected?.address?.street ?? ""
                  );
                  form.setValue("address.city", selected?.address?.city ?? "");
                }
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um paciente" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {patients?.map((patient) => (
                  <SelectItem key={patient.id} value={String(patient.id)}>
                    {patient.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-8">
        {/* CPF */}
        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input placeholder="Digite o CPF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Data de Nascimento */}
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data de Nascimento</FormLabel>
              <FormControl>
                <Input placeholder="Digite a data" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Telefone */}
        <FormField
          control={form.control}
          name="cellphone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="Digite o telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Digite o e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
