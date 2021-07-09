import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatsService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  create(createCatDto: CreateCatDto): Promise<Cat> {
    const newCat = this.catRepository.create(createCatDto);
    return this.catRepository.save(newCat);
  }

  findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  async findOne(id: number): Promise<Cat> {
    try {
      const cat = await this.catRepository.findOneOrFail(id);
      return cat;
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<Cat> {
    try {
      const cat = await this.catRepository.findOneOrFail(id);
      cat.name = updateCatDto.name;
      cat.age = updateCatDto.age;
      cat.breed = updateCatDto.breed;
      return this.catRepository.save(cat);
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }

  async remove(id: number): Promise<Cat> {
    try {
      const cat = await this.catRepository.findOneOrFail(id);
      return this.catRepository.remove(cat);
    } catch (err) {
      throw new HttpException(err, HttpStatus.NOT_FOUND);
    }
  }
}
