import { ApiProperty } from '@nestjs/swagger';
import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

export const addressSchema = z.object({
  id: z.string().optional(),
  street: z.string({
    required_error: 'Street is required',
    invalid_type_error: 'Street must be a string',
  }),
  number: z.number({
    required_error: 'Number is required',
    invalid_type_error: 'Number must be a number',
  }),
  district: z.string({
    required_error: 'District is required',
    invalid_type_error: 'District must be a string',
  }),
  cep: z
    .string({
      required_error: 'CEP is required',
      invalid_type_error: 'CEP must be a string',
    })
    .length(8, {
      message: 'CEP must be 8 characters',
    }),
  city: z.string({
    required_error: 'City is required',
    invalid_type_error: 'City must be a string',
  }),
  state: z.string({
    required_error: 'State is required',
    invalid_type_error: 'State must be a string',
  }),
});

export class AddressDTO extends createZodDto(addressSchema) {
  @ApiProperty({
    description: 'Address ID',
    type: String,
    required: false,
  })
  id: string;

  @ApiProperty({
    description: 'Address street',
    type: String,
    required: false,
  })
  street: string;

  @ApiProperty({
    description: 'Address number',
    type: Number,
    required: false,
  })
  number: number;

  @ApiProperty({
    description: 'Address district',
    type: String,
    required: false,
  })
  district: string;

  @ApiProperty({
    description: 'Address cep',
    type: String,
    required: false,
  })
  cep: string;

  @ApiProperty({
    description: 'Address city',
    type: String,
    required: false,
  })
  city: string;

  @ApiProperty({
    description: 'Address state',
    type: String,
    required: false,
  })
  state: string;

  @ApiProperty({
    description: 'Address complement',
    type: String,
    required: false,
  })
  complement: string;

  @ApiProperty({
    description: 'Address creation date',
    type: Date,
    required: false,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Address update date',
    type: Date,
    required: false,
  })
  updatedAt: Date;
}
