import { Injectable, NotFoundException } from "@nestjs/common";
import { CatalogsRepository } from "../repository/catalogs.repository";
import { Catalog } from "../catalogs.entity";
import { CreateCatalogDto } from '../dto/create-catalogs.dto';
import { ConnectionType } from "../Enums/catalogs-connectionType.enum";
import { GetCatalogsFilterDto } from "../dto/get-catalogs-filter.dto";

 
@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: CatalogsRepository) {}

//   addField(createTaskDto: CreateTaskDto): Promise<Catalog> {
//     return this.tasksRepository.addField(createTaskDto);
//   }
}