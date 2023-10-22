import { Injectable, NotFoundException } from "@nestjs/common";
import { TasksRepository } from "./catalogs.repository";
import { Task } from "./catalogs.entity";
import { CreateTaskDto } from './dto/create-catalogs.dto';
import { ConnectionType } from "./catalogs-connectionType.enum";
import { GetTasksFilterDto } from "./dto/get-catalogs-filter.dto";
 
 
@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) {}

  getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(filterDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException(`Task with ID "${id}" not found!`);
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  // async updateTaskStatus(id: string, connectionType: ConnectionType): Promise<Task> {
  //   const task = await this.getTaskById(id);

  //   task.ConnectionType = connectionType;
  //   await this.tasksRepository.save(task);

  //   return task;
  // }

  async updateTask(id: string, updateFields: Partial<Task>): Promise<Task> {
    const task = await this.getTaskById(id);
    Object.assign(task, updateFields);
    await this.tasksRepository.save(task);
    return task;
  }
}