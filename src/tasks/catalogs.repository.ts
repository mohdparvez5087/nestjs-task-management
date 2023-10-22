import { DataSource, Repository } from 'typeorm';
import { Task } from './catalogs.entity';
import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-catalogs.dto';
import { ConnectionType } from './catalogs-connectionType.enum';
import { GetTasksFilterDto } from './dto/get-catalogs-filter.dto';
import { SelectDataSource } from './catalogs-dataSource.enum';

@Injectable()
export class TasksRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    const { connectionType, search } = filterDto;

    const query = this.createQueryBuilder('task');

    if (connectionType) {
      query.andWhere('task.connectionType = :connectionType', { connectionType });
    }

    if (search) {
      query.andWhere(
        'LOWER(task.catalogName) LIKE LOWER(:search) OR LOWER(task.databaseName) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const {
      dataSource,
      catalogName,
      description,
      connectionType,
      rdsDatabaseHost,
      port,
      databaseName,
      rdsMasterDatabaseUsername,
      rdsMasterDatabasePassword,
      useTls,

    } = createTaskDto;

    const task = this.create({
      dataSource,
      catalogName,
      description,
      connectionType,
      rdsDatabaseHost,
      port,
      databaseName,
      rdsMasterDatabaseUsername,
      rdsMasterDatabasePassword,
      useTls
    });
    await this.save(task);
    return task;
  }


  // async addField(createTaskDto: CreateTaskDto): Promise<Task> {
  //   const {
  //     fieldName,
  //     fieldType
  //   } = createTaskDto;

  //   const task = this.create({
  //     fieldName,
  //     fieldType
  //   });
  //   await this.save(task);
  //   return task;
  // }
  
}
