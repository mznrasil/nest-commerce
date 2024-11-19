import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Config } from '../config/config.interface';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<Config>) => ({
        type: 'postgres',
        host: configService.getOrThrow('dbHost'),
        port: configService.getOrThrow('dbPort'),
        database: configService.getOrThrow('dbName'),
        username: configService.getOrThrow('dbUsername'),
        password: configService.getOrThrow('dbPassword'),
        autoLoadEntities: true,
        synchronize: configService.getOrThrow('dbSynchronize'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
