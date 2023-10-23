import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatalogsController } from "./controller/catalogs.controller";
import { CatalogsRepository } from "./repository/catalogs.repository";
import { CatalogsService } from "./services/catalogs.service";
import { Catalog } from "./catalogs.entity";
 
@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  exports: [CatalogsService],
  controllers: [CatalogsController],
  providers: [CatalogsService, CatalogsRepository],
})
export class CatalogsModule {}
