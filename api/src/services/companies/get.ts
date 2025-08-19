import { Company, PrismaClient } from "@prisma/client";

export class GetCompanyService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(id: number | string): Promise<Company | null> {
    const result = await this.prisma.company.findFirst({
      where: {
        id: Number(id),
      },
    });

    return result;
  }
}
