import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ConnectionType } from './catalogs-connectionType.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  catalogName: string;

  @Column()
  description: string;

  @Column()
  ConnectionType: ConnectionType;

  @Column()
  rdsDatabaseHost: string;

  @Column()
  port: string;

  @Column()
  databaseName: string;

  @Column()
  rdsMasterDatabaseUsername: string;

  @Column()
  rdsMasterDatabasePassword: string;

  @Column()
  useTls: boolean;


}
