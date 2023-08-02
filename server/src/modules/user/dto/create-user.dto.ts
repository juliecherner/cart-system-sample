import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'login',
    description: 'Username',
  })
  username: string;

  @ApiProperty({
    example: 'password',
    description: 'password',
  })
  password: string;
  
}
