import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './DB/config.service';
import { UsersModule } from './model/users/users.module';
import { PostsModule } from './model/posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getConfig()),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
