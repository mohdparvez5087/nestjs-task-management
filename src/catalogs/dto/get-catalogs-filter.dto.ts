import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ConnectionType } from '../Enums/catalogs-connectionType.enum';

export class GetCatalogsFilterDto {
  @IsOptional()
  @IsEnum(ConnectionType)
  connectionType?: ConnectionType;

  @IsOptional()
  @IsString()
  search?: string;
}
