import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Post } from 'src/model/posts/entities/post.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    posts: Post[];
    
}
