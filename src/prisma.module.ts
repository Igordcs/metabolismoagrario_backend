import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './database/repositories/user.repository';
import { CropsRepository } from './database/repositories/crops.repository';
import { ConstantsRepository } from './database/repositories/constants.repository';
import { CultivarsRepository } from './database/repositories/cultivars.repository';
import { PasswordResetRepository } from '@db/repositories/password-reset.repository';
import { CultivarReviewRepository } from '@db/repositories/cultivarReview.repository';
import { ReferenceRepository } from '@db/repositories/reference.repository';
import { EnvironmentRepository } from '@db/repositories/environment.repository';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    CropsRepository,
    CultivarsRepository,
    ConstantsRepository,
    PasswordResetRepository,
    CultivarReviewRepository,
    ReferenceRepository,
    EnvironmentRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    CropsRepository,
    CultivarsRepository,
    ConstantsRepository,
    PasswordResetRepository,
    CultivarReviewRepository,
    ReferenceRepository,
    EnvironmentRepository,
  ],
})
export class DatabaseModule {}
