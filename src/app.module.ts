import { Module } from '@nestjs/common';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [NinjasModule, UsersModule],

})
export class AppModule {}
