import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('/user')
export class UserController {
  constructor() {}

  @Post()
  async createUser() {
    return 'Hello World';
  }
}
