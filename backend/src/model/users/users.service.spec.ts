import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { configService } from 'src/DB/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(configService.getTestConfig())],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
