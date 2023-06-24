import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
 
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;
    
    @Column()
    visibility: string;

    @CreateDateColumn()
    post_date: Date;

    @ManyToOne(() => User, (user: User) => user.posts)
    user: User

}