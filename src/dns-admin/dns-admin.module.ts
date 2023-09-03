import { Module } from "@nestjs/common";
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DNSIP } from "./entities/dns-ips.entity";
import DnsAdminController from "./dns-admin.controller";
import DnsAdminService from "./dns-admin.service";


@Module({
   imports: [ScheduleModule.forRoot(),
             TypeOrmModule.forFeature([DNSIP])],
   controllers: [DnsAdminController],
   providers: [DnsAdminService],
})
export default class DnsAdminModule {}