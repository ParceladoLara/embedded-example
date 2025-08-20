"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/common/components/shadcn/ui/form";
import { Input } from "@/common/components/shadcn/ui/input";
import { useFormContext } from "react-hook-form";
import type { NewAppointmentFormSchema } from "../schema";

const addressFields: {
  key: keyof NewAppointmentFormSchema["address"];
  label: string;
}[] = [
  { key: "zip", label: "CEP" },
  { key: "city", label: "Cidade" },
  { key: "state", label: "Estado" },
  { key: "street", label: "Rua" },
  { key: "number", label: "Número" },
  { key: "complement", label: "Complemento" },
];

export default function AddressDataForm() {
  const form = useFormContext<NewAppointmentFormSchema>();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-semibold text-lg">Endereço:</h1>
      <div className="grid grid-cols-2 gap-8">
        {addressFields.map(({ key, label }) => (
          <FormField
            key={key}
            control={form.control}
            name={`address.${key}` as const}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={`Digite ${label.toLowerCase()}`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
}
