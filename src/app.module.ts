import { Module } from '@nestjs/common';
import { CatalogsModule } from './catalogs/catalogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatalogsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Catalogs',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
