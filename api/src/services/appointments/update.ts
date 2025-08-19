import { PrismaClient } from "@prisma/client";

export interface UpdateAppointmentDTO {
  id: number;
  lara_proposal_status?: string;
  lara_proposal_id?: string;
}

export class UpdateAppointmentService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute({ id, ...rest }: UpdateAppointmentDTO) {
    const result = await this.prisma.appointment.update({
      where: {
        id: id,
      },
      data: { ...rest },
    });

    return result;
  }
}
