import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ConnectionType } from './Enums/catalogs-connectionType.enum';
import { SelectDataSource } from './Enums/catalogs-dataSource.enum';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  dataSource: SelectDataSource;

  @Column()
  catalogName: string;

  @Column()
  description: string;

  @Column()
  connectionType: ConnectionType;

  @Column()
  rdsDatabaseHost: string;

  @Column()
  port: Number;

  @Column()
  databaseName: string;

  @Column()
  rdsMasterDatabaseUsername: string;

  @Column()
  rdsMasterDatabasePassword: string;

  @Column()
  useTls: boolean;

  // @Column()
  // fieldName: string;

  // @Column()
  // fieldType: string;
}
