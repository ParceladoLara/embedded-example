import { Appointment, PrismaClient } from "@prisma/client";

export interface UpdateAppointmentValueDTO
  extends Omit<Appointment, "patient_id"> {}

export class UpdateAppointmentValueService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(data: UpdateAppointmentValueDTO) {
    const result = await this.prisma.appointment.update({
      where: {
        id: data.id,
      },
      data: {
        value: Number(data.value),
      },
    });

    return result;
  }
}
