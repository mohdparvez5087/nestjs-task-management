import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ConnectionType } from '../catalogs-status.enum';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(ConnectionType)
  connectionType?: ConnectionType;

  @IsOptional()
  @IsString()
  search?: string;
}
