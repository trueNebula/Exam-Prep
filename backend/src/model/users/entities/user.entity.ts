import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Post } from '../../posts/entities/post.entity';
import { Exclude } from '@nestjs/class-transformer';
import { Role } from 'src/auth/role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    @Exclude()
    password: string;

    @Column()
    role: Role;

    @OneToMany(() => Post, (post: Post) => post.user)
    posts: Post[]

}