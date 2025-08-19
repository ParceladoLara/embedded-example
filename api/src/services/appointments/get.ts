import { Appointment, PrismaClient } from "@prisma/client";

export class GetAppointmentService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(id: number | string): Promise<Appointment | null> {
    const result = await this.prisma.appointment.findFirst({
      where: {
        id: Number(id),
      },
      include: { patient: true },
    });

    return result;
  }
}
