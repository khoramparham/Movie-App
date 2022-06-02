import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManageUsers } from './manage-users.controller';
import { ManageUsersService } from './manage-users.service';
import { ManageUsersFeature } from './manage-users.feature';
import { ManageUserRepository } from './manage-users.repository';

@Module({
  imports: [
    MongooseModule.forFeature(ManageUsersFeature),
  ],
  controllers: [ManageUsers],
  providers: [
    ManageUsersService,
    ManageUserRepository,
  ]
})
export class ManageUsersModule { }
