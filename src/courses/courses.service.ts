// courses.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}

  create(createCourseDto: CreateCourseDto) {
    const addedCourse = this.courseRepository.create(createCourseDto as DeepPartial<Course>);
    this.courseRepository.save(addedCourse);
    return addedCourse;
  }

  findAll() {
    return this.courseRepository.find();
  }




}
