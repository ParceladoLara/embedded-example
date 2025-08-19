import { Employee, PrismaClient } from "@prisma/client";

export class ListEmployeesService {
  private readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient = new PrismaClient()) {
    this.prisma = prisma;
  }

  public async execute(): Promise<Employee[]> {
    const employees = await this.prisma.employee.findMany({
      include: { company: true },
    });

    return employees;
  }
}
