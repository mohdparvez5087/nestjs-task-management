import { DataSource, Repository } from 'typeorm';
import { Catalog } from '../catalogs.entity';
import { Injectable } from '@nestjs/common';
import { CreateCatalogDto } from '../dto/create-catalogs.dto';
import { GetCatalogsFilterDto } from '../dto/get-catalogs-filter.dto';
import { SelectDataSource } from '../Enums/catalogs-dataSource.enum';
import { ConnectionType } from '../Enums/catalogs-connectionType.enum';


@Injectable()
export class CatalogsRepository extends Repository<Catalog> {
  constructor(private dataSource: DataSource) {
    super(Catalog, dataSource.createEntityManager());
  }

  async getCatalogs(filterDto: GetCatalogsFilterDto): Promise<Catalog[]> {
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

  async createcatalog(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
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

    } = createCatalogDto;

  let enumDataSource;
  let enumConnectionType;

  // Determine the enum values based on the input values
  if (dataSource === 'Apache') {
    enumDataSource = SelectDataSource.Apache;
  } else if (dataSource === 'PostgreSql') {
    enumDataSource = SelectDataSource.PostgreSql;
  } else if (dataSource === 'Oracle') {
    enumDataSource = SelectDataSource.Oracle;
  } else if(dataSource === 'Teradata'){ 
    enumDataSource = SelectDataSource.Teradata;
  } else {
    enumDataSource = SelectDataSource.MySql; // Default value
  }

  //ConnectionType Enum
  if (connectionType === 'CONNECTION_VIA_SSH_TUNNEL') {
    enumConnectionType = ConnectionType.CONNECTION_VIA_SSH_TUNNEL;
  } else {
    enumConnectionType = ConnectionType.CONNECTION_DIRECTLY;
  }

    const catalog = this.create({
      dataSource: enumDataSource,
      catalogName,
      description,
      connectionType: enumConnectionType,
      rdsDatabaseHost,
      port,
      databaseName,
      rdsMasterDatabaseUsername,
      rdsMasterDatabasePassword,
      useTls
    });
    await this.save(catalog);
    return catalog;
  }


  

}
