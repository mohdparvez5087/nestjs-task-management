import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogsController } from "./Controller/catalogs.controller";
import { CatalogsRepository } from "./Repository/catalogs.repository";
import { CatalogsService } from "./Services/catalogs.service";
import { Catalog } from "./catalogs.entity";
 
@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  exports: [CatalogsService],
  controllers: [CatalogsController],
  providers: [CatalogsService, CatalogsRepository],
})
export class CatalogsModule {}
