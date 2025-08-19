import { PrismaClient } from "@prisma/client";

export interface CreateCompanyDTO {
  cnpj: string;
  name: string;
}

export class CreateCompanyService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute({ cnpj, name }: CreateCompanyDTO) {
    const company = await this.prisma.company.create({
      data: {
        cnpj,
        name,
      },
    });

    return company;
  }
}
