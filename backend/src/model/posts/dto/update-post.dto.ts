import { CreatePostDto } from './create-post.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdatePostDto extends OmitType(CreatePostDto, ['post_date', 'user'] as const) {}
