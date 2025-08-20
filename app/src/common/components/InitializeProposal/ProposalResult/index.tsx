import type { InitializeProposalResponseType } from "@/common/types/InitializeProposalResponseType";
import { getProposalResultInfosByStatus } from "@/common/utils/getProposalResultInfosByStatus";
import { useFormContext } from "react-hook-form";
import { Input } from "../../shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../shadcn/ui/form";
import { Button } from "../../shadcn/ui/button";

interface ProposalResultProps {
  initializeProposalData: InitializeProposalResponseType | undefined;
}

export default function ProposalResult({
  initializeProposalData,
}: ProposalResultProps) {
  const status = initializeProposalData?.status;
  const resultInfos = getProposalResultInfosByStatus(status);

  const customer = initializeProposalData?.customer;

  const form = useFormContext();

  const renderInfos = (label: string, value: string) => {
    return (
      <div className="text-gray-500">
        <h1 className="font-semibold text-md">{label}</h1>
        <h1 className="font-regular text-lg">{value}</h1>
      </div>
    );
  };

  return (
    <div className="bg-white w-2/5 flex flex-col justify-center py-4 px-30 gap-8">
      <div
        className={`flex gap-2 text-3xl font-semibold items-center ${resultInfos.color}`}
      >
        <resultInfos.Icon size={"3rem"} />
        <h1>{resultInfos.title}</h1>
      </div>

      <div className="w-full flex justify-between">
        {renderInfos("Nome completo", customer?.name ?? "-")}
        {renderInfos("CPF", customer?.cpf ?? "-")}
      </div>

      {/* Form abaixo do renderInfos */}
      <div className="flex flex-col gap-4 mt-6">
        <FormField
          control={form.control}
          name="installments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero de parcelas</FormLabel>
              <FormControl>
                <Input placeholder="x" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="firstPaymentDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Data para pagamento</FormLabel>
              <FormControl>
                <Input placeholder="xx/xx/xxxx" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-green-600 hover:bg-green-700 cursor-pointer"
        >
          Calcular
        </Button>
      </div>
    </div>
  );
}
