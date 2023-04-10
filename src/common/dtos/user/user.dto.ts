import { ApiProperty } from '@nestjs/swagger';
import { InformationDTO } from '../informations/information.dto';
import { AddressDTO } from '../address/address.dto';
import { z } from 'nestjs-zod/z';
import { UserAuthDTO } from '../auth/user-auth.dto';

export const userSchema = z.object({
  id: z
    .string({
      required_error: 'User ID is required',
      invalid_type_error: 'User ID must be a string',
    })
    .optional(),
  information: z.instanceof(InformationDTO),
  auth: z.instanceof(UserAuthDTO),
  address: z.instanceof(AddressDTO),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export class UserDTO {
  @ApiProperty({
    description: 'Users ID',
    type: String,
    required: false,
  })
  id: string;

  @ApiProperty({
    description: 'User information',
    type: InformationDTO,
    required: false,
  })
  information: InformationDTO;

  @ApiProperty({
    description: 'User auth',
    type: String,
    required: false,
  })
  auth: string;

  @ApiProperty({
    description: 'User address',
    type: AddressDTO,
    required: false,
  })
  address: AddressDTO;

  @ApiProperty({
    description: 'User created at',
    type: Date,
    required: false,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User updated at',
    type: Date,
    required: false,
  })
  updatedAt: Date;
}
