import { Injectable, NotFoundException } from "@nestjs/common";
import { CatalogsRepository } from "./catalogs.repository";
import { Catalog } from "./catalogs.entity";
import { CreateTaskDto } from './dto/create-catalogs.dto';
import { ConnectionType } from "./catalogs-connectionType.enum";
import { GetTasksFilterDto } from "./dto/get-catalogs-filter.dto";

 
@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: CatalogsRepository) {}

//   addField(createTaskDto: CreateTaskDto): Promise<Catalog> {
//     return this.tasksRepository.addField(createTaskDto);
//   }
}