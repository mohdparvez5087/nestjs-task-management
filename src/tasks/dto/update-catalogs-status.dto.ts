import { IsEnum } from 'class-validator';
import { ConnectionType } from '../catalogs-connectionType.enum';

export class UpdateTaskStatusDto {
  @IsEnum(ConnectionType)
  connectionType: ConnectionType;
}
