import { ApiProperty } from '@nestjs/swagger';
import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const informationSchema = z.object({
  id: z.string(),
  firstName: z.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
  lastName: z.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string',
  }),
  doc: z.string({
    required_error: 'Document number is required',
    invalid_type_error: 'Document number must be a string',
  }),
  docType: z.string({
    required_error: 'Document type is required',
    invalid_type_error: 'Document type must be a string',
  }),
  contactPhone: z.string({
    required_error: 'Contact phone is required',
    invalid_type_error: 'Contact phone must be a string',
  }),
  alternativePhone: z
    .string({
      invalid_type_error: 'Alternative phone must be a string',
    })
    .optional(),
  observations: z
    .string({
      invalid_type_error: 'Observations must be a string',
    })
    .optional(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
});

export class InformationDTO extends createZodDto(informationSchema) {
  @ApiProperty({
    description: 'Information ID',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'User first name',
    type: String,
  })
  firstName: string;

  @ApiProperty({
    description: 'User last name',
    type: String,
  })
  lastName: string;

  @ApiProperty({
    description: 'User document number',
    type: String,
  })
  doc: string;

  @ApiProperty({
    description: 'User document type',
    type: String,
    examples: ['cpf', 'cnpj'],
  })
  docType: string;

  @ApiProperty({
    description: 'User contact phone',
    type: String,
  })
  contactPhone: string;

  @ApiProperty({
    description: 'User alternative phone',
    type: String,
  })
  alternativePhone: string;

  @ApiProperty({
    description: 'User observations',
    type: String,
  })
  observations: string;

  @ApiProperty({
    description: 'User created at',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    description: 'User updated at',
    type: Date,
  })
  updatedAt: Date;
}
