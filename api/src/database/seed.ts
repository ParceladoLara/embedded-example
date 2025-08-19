import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Empresa
  await prisma.company.upsert({
    where: { id: 1 },
    update: {}, // não muda nada se já existir
    create: {
      id: 1,
      cnpj: "17203865000158",
      name: "Memhis & Pay",
      apiKey: "608badeb-7a27-4c11-ae05-0e83898211b3",
    },
  });

  // Funcionário
  await prisma.employee.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Guilherme Nunes",
      cellphone: "5582996138682",
      cpf: "09606305465",
      dateOfBirth: "2002-08-13 06:00:00.000",
      lara_id: "46033b0c-a4ea-498d-b3a0-381fbaef4a66",
      company_id: 1,
    },
  });

  // Endereço
  await prisma.address.upsert({
    where: { id: 1 }, // Se quiser chave única melhor usar zip+street+number
    update: {},
    create: {
      id: 1,
      zip: "05424150",
      city: "São Paulo",
      state: "SP",
      street: "R. Pais Leme",
      number: 215,
      complement: null,
    },
  });

  console.log("✅ Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
