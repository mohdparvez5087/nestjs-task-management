import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksController } from "./catalogs.controller";
import { TasksRepository } from "./catalogs.repository";
import { TasksService } from "./catalogs.service";
import { Task } from "./catalogs.entity";
 
@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  exports: [TasksService],
  controllers: [TasksController],
  providers: [TasksService, TasksRepository],
})
export class TasksModule {}
