import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./catalogs.service";
import { Catalog } from "./catalogs.entity";
import { CreateTaskDto } from './dto/create-catalogs.dto';
import { GetTasksFilterDto } from "./dto/get-catalogs-filter.dto";

 
@Controller("tasks")
export class CatalogsController {
  constructor(private taskService: TasksService) {}
 
  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Catalog[]> {
    return this.taskService.getTasks(filterDto);
  }

  @Get("/:id")
  getTaskById(@Param("id") id: string): Promise<Catalog> {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Catalog> {
    return this.taskService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTask(id);
  }

  // @Patch('/:id/connectiontype')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Promise<Catalog> {
  //   const { connectionType } = updateTaskStatusDto;
  //   return this.taskService.updateTaskStatus(id, connectionType);
  // }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() updateFields: Partial<Catalog>): Promise<Catalog> {
    return this.taskService.updateTask(id, updateFields);
  }
}