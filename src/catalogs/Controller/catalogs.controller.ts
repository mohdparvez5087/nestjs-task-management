import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { CatalogsService } from "../Services/catalogs.service";
import { Catalog } from "../catalogs.entity";
import { CreateCatalogDto } from '../dto/create-catalogs.dto';
import { GetCatalogsFilterDto } from "../dto/get-catalogs-filter.dto";

 
@Controller("catalog")
export class CatalogsController {
  constructor(private catalogService: CatalogsService) {}
 
  @Get()
  getCatalogs(@Query() filterDto: GetCatalogsFilterDto): Promise<Catalog[]> {
    return this.catalogService.getCatalogs(filterDto);
  }

  @Get("/:id")
  getCatalogById(@Param("id") id: string): Promise<Catalog> {
    return this.catalogService.getCatalogById(id);
  }

  @Post()
  createCatalog(@Body() createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    return this.catalogService.createCatalog(createCatalogDto);
  }

  @Delete('/:id')
  deleteCatalog(@Param('id') id: string): Promise<void> {
    return this.catalogService.deletecatalog(id);
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
  async updateCatalog(@Param('id') id: string, @Body() updateFields: Partial<Catalog>): Promise<Catalog> {
    return this.catalogService.updateCatalog(id, updateFields);
  }
}