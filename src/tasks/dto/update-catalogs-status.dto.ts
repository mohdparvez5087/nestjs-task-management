import { IsEnum } from 'class-validator';
import { ConnectionType } from '../catalogs-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(ConnectionType)
  connectionType: ConnectionType;
}
