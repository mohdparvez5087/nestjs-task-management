import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  catalogName: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  rdsDatabaseHost: string;
  
  @IsOptional()
  port: string;

  @IsNotEmpty()
  databaseName: string;

  @IsNotEmpty()
  rdsMasterDatabaseUsername: string;

  @IsNotEmpty()
  rdsMasterDatabasePassword: string;

  @IsNotEmpty()
  useTls: boolean;
}
