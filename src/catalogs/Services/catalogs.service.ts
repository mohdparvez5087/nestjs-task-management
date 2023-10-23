import { Injectable, NotFoundException } from "@nestjs/common";
import { CatalogsRepository } from "../Repository/catalogs.repository";
import { Catalog } from "../catalogs.entity";
import { CreateCatalogDto } from '../dto/create-catalogs.dto';
import { GetCatalogsFilterDto } from "../dto/get-catalogs-filter.dto";
 
 
@Injectable()
export class CatalogsService {
  constructor(private readonly catalogsRepository: CatalogsRepository) {}

  getCatalogs(filterDto: GetCatalogsFilterDto): Promise<Catalog[]> {
    return this.catalogsRepository.getCatalogs(filterDto);
  }

  async getCatalogById(id: string): Promise<Catalog> {
    const found = await this.catalogsRepository.findOne({ where: { id } });
    if (!found) throw new NotFoundException(`Catalog with ID "${id}" not found!`);
    return found;
  }

  createCatalog(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    return this.catalogsRepository.createcatalog(createCatalogDto);
  }

  async deletecatalog(id: string): Promise<void> {
    const result = await this.catalogsRepository.delete(id);

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

  async updateCatalog(id: string, updateFields: Partial<Catalog>): Promise<Catalog> {
    const catalog = await this.getCatalogById(id);
    Object.assign(catalog, updateFields);
    await this.catalogsRepository.save(catalog);
    return catalog;
  }
}