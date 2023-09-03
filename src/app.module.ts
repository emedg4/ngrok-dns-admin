import { Module } from '@nestjs/common';
import DnsAdminModule from './dns-admin/dns-admin.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    DnsAdminModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal:true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService:ConfigService) => ({
        type: 'postgres',
        host: configService.get('database.pg.host'),
        port: configService.get('database.pg.port'),
        username: configService.get('database.pg.user'),
        password: configService.get('database.pg.pass'),
        database: configService.get('database.pg.db'),
        autoLoadEntities: true,
        synchronize: true
      })
    })
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
