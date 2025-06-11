import { Module } from '@nestjs/common';
import { ReferenceController } from './reference.controller';
import { ReferenceService } from './reference.service';
import { DatabaseModule } from 'src/prisma.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ReferenceController],
  providers: [ReferenceService],
  exports: [ReferenceService],
})
export default class ReferenceModule {}
