import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/database.service';

@Injectable()
export class GetAllUserService {
  constructor(private readonly database: PrismaService) {}

  async getUser(): Promise<string> {
    return 'Hello World!';
  }
}
