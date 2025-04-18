import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { UpdateCropDto } from '@modules/crops/dto/update-crop.dto';

export interface CreateCropData {
  id: string;
  name: string;
  scientificName: string;
}

@Injectable()
export class CropsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCropData) {
    const crops = await this.prisma.crop.create({ data });
    return crops;
  }

  async findById(id: string) {
    return await this.prisma.crop.findUnique({
      where: { id },
      include: {
        cultivars: {
          where: {
            OR: [
              { reviews: { none: {} } }, // criadas por quem tem permissão
              { reviews: { some: { status: 'Approved' } } }, // solicitações aprovadas por ADMIN
            ],
          },
        },
      },
    });
  }

  async listAll() {
    return await this.prisma.crop.findMany();
  }

  async update(id: string, data: UpdateCropDto) {
    console.log({ data });
    try {
      return await this.prisma.crop.update({
        where: {
          id,
        },
        data,
      });
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.crop.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Cultura com id: ${id} não existe`);
    }
  }
}
