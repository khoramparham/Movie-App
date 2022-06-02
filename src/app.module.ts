import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManageUsersModule } from './manage-users/manage-users.module';


@Module({
  imports: [
    ManageUsersModule,
    MongooseModule.forRoot('mongodb://localhost/MovieApp'),
  ],
  providers: [],
})
export class AppModule {}
