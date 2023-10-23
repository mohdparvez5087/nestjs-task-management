import { Injectable, NotFoundException } from "@nestjs/common";
import { CatalogsRepository } from "./catalogs.repository";
import { Catalog } from "./catalogs.entity";
import { CreateCatalogDto } from './dto/create-catalogs.dto';
import { GetTasksFilterDto } from "./dto/get-catalogs-filter.dto";
 
 
@Injectable()
export class CatalogsService {
  constructor(private readonly tasksRepository: CatalogsRepository) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<Catalog[]> {
    return this.tasksRepository.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Catalog> {
    const found = await this.tasksRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException(`Catalog with ID "${id}" not found!`);
    return found;
  }

  createTask(createTaskDto: CreateCatalogDto): Promise<Catalog> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Catalog with ID "${id}" not found`);
    }
  }

  // async updateTaskStatus(id: string, connectionType: ConnectionType): Promise<Catalog> {
  //   const task = await this.getTaskById(id);

  //   task.ConnectionType = connectionType;
  //   await this.tasksRepository.save(task);

  //   return task;
  // }

  async updateTask(id: string, updateFields: Partial<Catalog>): Promise<Catalog> {
    const task = await this.getTaskById(id);
    Object.assign(task, updateFields);
    await this.tasksRepository.save(task);
    return task;
  }
}