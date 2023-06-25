import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DataSource } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(private dataSource: DataSource) {}
  
  async create(createPostDto: CreatePostDto) {
    const { title, content, visibility, post_date, user } = createPostDto;
    const response = await this.dataSource
      .createQueryBuilder()
      .insert()
      .into(Post)
      .values([
        { title: title, content: content, visibility: visibility, post_date: post_date, user: user }
      ])
      .execute();

    return response;
  }

  async findAll(query) {
    const take = query.take || 10;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    const keyword = query.keyword || "";

    const posts = await this.dataSource
      .createQueryBuilder()
      .select("post")
      .from(Post, "post")
      .where("post.title LIKE :keyword", { keyword: `%${keyword}%` })
      .orWhere("post.content LIKE :keyword", { keyword: `%${keyword}%` })
      .orderBy("post.id", "ASC")
      .take(take)
      .skip(skip)
      .getMany();

    return posts;
  }

  async findOne(id: number) {
    const post = await this.dataSource
      .createQueryBuilder()
      .select("post")
      .from(Post, "post")
      .where("post.id = :id", { id: id })
      .getOne();

      return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const { title, content, visibility } = updatePostDto;
    const response = await this.dataSource
      .createQueryBuilder()
      .update(Post)
      .set({ title: title, content: content, visibility: visibility })
      .where("id = :id", { id: id })
      .execute();

    return response;
  }

  async remove(id: number) {
    const response = await this.dataSource
    .createQueryBuilder()
    .delete()
    .from(Post)
    .where("id = :id", { id: id })
    .execute();

    return response;
  }
}
