import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from "./catalogs.controller";
import { TasksRepository } from "./catalogs.repository";
import { TasksService } from "./catalogs.service";
import { Catalog } from "./catalogs.entity";
 
@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  exports: [TasksService],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
