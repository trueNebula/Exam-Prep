import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from 'src/DB/config.service';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(configService.getTestConfig())],
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
