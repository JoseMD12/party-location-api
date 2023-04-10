import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';
import { z } from 'nestjs-zod/z';
import { createUserSchema } from '../../dtos/user/create-user.dto';
import { UserDTO } from '../../dtos/user/user.dto';

type createUserDTO = z.TypeOf<typeof createUserSchema>;

@Injectable()
export class PostUserService {
  constructor(private readonly database: PrismaService) {}

  async createPostUser(data: createUserDTO) {
    const user = await this.database.user.create({
      data: {
        information: {
          create: {
            firstName: data.information.firstName,
            lastName: data.information.lastName,
            doc: data.information.doc,
            docType: data.information.docType,
            contactPhone: data.information.contactPhone,
            alternativePhone: data.information.alternativePhone,
            observations: data.information.observations,
          },
        },
        auth: {
          create: {
            email: data.auth.email,
            password: data.auth.password,
          },
        },
        address: {
          create: {
            street: data.address.street,
            number: data.address.number,
            complement: data.address.complement,
            cep: data.address.cep,
            city: data.address.city,
            district: data.address.district,
            state: data.address.state,
          },
        },
      },
    });

    return user;
  }
}
