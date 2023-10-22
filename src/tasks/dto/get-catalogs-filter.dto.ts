import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ConnectionType } from '../catalogs-connectionType.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(ConnectionType)
  connectionType?: ConnectionType;

  @IsOptional()
  @IsString()
  search?: string;
}
