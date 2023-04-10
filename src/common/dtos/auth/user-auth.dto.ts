import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const userAuthSchema = z.object({
  id: z.string(),
  email: z
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Email must be a string',
    })
    .email({
      message: 'Email must be a valid email',
    }),
  password: z
    .string({
      required_error: 'Password is required',
      invalid_type_error: 'Password must be a string',
    })
    .min(6, {
      message: 'Password must be at least 6 characters long',
    }),
  resetToken: z.string().optional(),
  accessToken: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export class UserAuthDTO extends createZodDto(userAuthSchema) {
  @ApiProperty({
    description: 'Auth ID',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'User email',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'User password',
    type: String,
  })
  password: string;

  @ApiProperty({
    description: "User's reset token",
    type: String,
  })
  resetToken: string;

  @ApiProperty({
    description: "User's access token",
    type: String,
  })
  accessToken: string;

  @ApiProperty({
    description: 'User Auth creation date',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User Auth update date',
    type: Date,
  })
  updatedAt: Date;
}
