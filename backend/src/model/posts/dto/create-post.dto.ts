import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/model/users/entities/user.entity";

export class CreatePostDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    content: string;

    @ApiProperty()
    visibility: string;

    @ApiProperty()
    post_date: Date;
    
    @ApiProperty()  
    user: User;
}
