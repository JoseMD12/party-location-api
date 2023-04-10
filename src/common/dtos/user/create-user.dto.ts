import { ApiProperty } from '@nestjs/swagger';
import { InformationDTO } from '../informations/information.dto';
import { AddressDTO } from '../address/address.dto';
import { z } from 'nestjs-zod/z';
import { UserAuthDTO } from '../auth/user-auth.dto';

export const createUserSchema = z.object({
  information: z.instanceof(InformationDTO),
  auth: z.instanceof(UserAuthDTO),
  address: z.instanceof(AddressDTO),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export class CreateUserDTO {
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
