import { Appointment, PrismaClient } from "@prisma/client";

export class ListAppointmentsService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(): Promise<Appointment[]> {
    const response = await this.prisma.appointment.findMany({
      include: { patient: true },
    });

    return response;
  }
}
