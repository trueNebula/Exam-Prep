import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}

  async create(createUserDto: CreateUserDto) {
    const { name, password, role } = createUserDto;
    const response = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        { name: name, password: password, role: role }
      ])
      .execute();

    return response;
  }

  async findAll(query) {
    const take = query.take || 10;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    const keyword = query.keyword || "";

    const users = await this.dataSource
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.name LIKE :keyword", { keyword: `%${keyword}%` })
      .orWhere("user.role LIKE :keyword", { keyword: `%${keyword}%` })      
      .orderBy("post.id", "ASC")
      .take(take)
      .skip(skip)
      .getMany();

    return users;
  }

  async findOne(id: number) {
    const user = await this.dataSource
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id: id })
      .getOne();

      return user;
  }

  async findByName(username: string) {
    const user = await this.dataSource
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.name = :name", { name: username })
      .getOne();

      return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { name, password, role, posts } = updateUserDto;
    const response = await this.dataSource
      .createQueryBuilder()
      .update(User)
      .set({ name: name, password: password, role: role, posts: posts })
      .where("id = :id", { id: id })
      .execute();

    return response;
  }

  async remove(id: number) {
    const response = await this.dataSource
      .createQueryBuilder()
      .delete()
      .from(User)
      .where("id = :id", { id: id })
      .execute();

    return response;
  }
}
