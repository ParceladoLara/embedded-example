import { Address, Company, Patient, PrismaClient } from "@prisma/client";

export type PatientWithRelations = Patient & {
  address: Address;
  company: Company;
};

export class GetPatientService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(
    id: number | string
  ): Promise<PatientWithRelations | null> {
    const result = await this.prisma.patient.findFirst({
      where: { id: Number(id) },
      include: { company: true, address: true },
    });

    if (!result) return null;

    return result;
  }
}
