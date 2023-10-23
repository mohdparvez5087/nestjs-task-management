import { IsNotEmpty, IsOptional } from 'class-validator';
import { SelectDataSource } from '../catalogs-dataSource.enum';
import { ConnectionType } from '../catalogs-connectionType.enum';

export class CreateCatalogDto {

  @IsNotEmpty()
  dataSource: SelectDataSource;

  @IsNotEmpty()
  catalogName: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  connectionType: ConnectionType;

  @IsNotEmpty()
  rdsDatabaseHost: string;
  
  @IsOptional()
  port: Number;

  @IsNotEmpty()
  databaseName: string;

  @IsNotEmpty()
  rdsMasterDatabaseUsername: string;

  @IsNotEmpty()
  rdsMasterDatabasePassword: string;

  @IsNotEmpty()
  useTls: boolean;

//   @IsOptional()
//   fieldName: string;

//   @IsOptional()
//   fieldType: string;
// 
}
