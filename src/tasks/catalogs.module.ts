import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogsController } from "./catalogs.controller";
import { CatalogsRepository } from "./catalogs.repository";
import { CatalogsService } from "./catalogs.service";
import { Catalog } from "./catalogs.entity";
 
@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  exports: [CatalogsService],
  controllers: [CatalogsController],
  providers: [CatalogsService, CatalogsRepository],
})
export class TasksModule {}
