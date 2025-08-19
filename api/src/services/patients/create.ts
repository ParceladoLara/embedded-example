import { Patient, PrismaClient } from "@prisma/client";

export interface CreatePatientDTO
  extends Omit<
    Patient,
    "address_id" | "id" | "collection_url" | "company_id"
  > {}

export class CreatePatientService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(data: CreatePatientDTO) {
    const result = await this.prisma.patient.create({
      data: {
        name: data.name,
        cellphone: data.cellphone,
        cpf: data.cpf,
        dateOfBirth: data.dateOfBirth,
        email: data.email,
        collection_url: null,
        company: {
          connect: { id: 1 },
        },
        address: {
          connect: { id: 1 },
        },
      },
    });

    return result;
  }
}
