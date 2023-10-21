import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/catalogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
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
