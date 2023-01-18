import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { user } from './entities/login.entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(user)
    private readonly sample_dataRepository: Repository<user>,
  ) {}
  create(createLoginDto: CreateLoginDto) {
    console.log('data is', createLoginDto);

    const data = {
      unseName: createLoginDto.userName,
      password: createLoginDto.password,
      email: createLoginDto.email,
    };
    return this.sample_dataRepository.save(data);
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
