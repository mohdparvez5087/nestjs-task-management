import { Injectable, NotFoundException } from "@nestjs/common";
import { TasksRepository } from "./catalogs.repository";
import { Task } from "./catalogs.entity";
import { CreateTaskDto } from './dto/create-catalogs.dto';
import { ConnectionType } from "./catalogs-connectionType.enum";
import { GetTasksFilterDto } from "./dto/get-catalogs-filter.dto";

 
@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

//   addField(createTaskDto: CreateTaskDto): Promise<Task> {
//     return this.tasksRepository.addField(createTaskDto);
//   }
}