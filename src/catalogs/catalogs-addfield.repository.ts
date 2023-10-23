import { DataSource, Repository } from 'typeorm';
import { Catalog } from './catalogs.entity';
import { Injectable } from '@nestjs/common';


@Injectable()
export class TasksRepository extends Repository<Catalog> {
  constructor(private dataSource: DataSource) {
    super(Catalog, dataSource.createEntityManager());
  }

  
}

// async addField(createTaskDto: CreateTaskDto): Promise<Catalog> {
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