import { Patient, PrismaClient } from "@prisma/client";

export class ListPatientsService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(): Promise<Patient[]> {
    const response = await this.prisma.patient.findMany({
      include: { company: true, address: true },
    });

    return response;
  }
}
