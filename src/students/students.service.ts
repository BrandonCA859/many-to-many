import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { StudentCourse } from 'src/courses/entities/student-course.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(StudentCourse)
    private readonly studentCourseRepository: Repository<StudentCourse>
  ) {}


  async createStudentCourse(createStudentCourse: {studentId: number, courseId: number}): Promise<void> {
    const student = await this.studentRepository.findOne({where: {id: createStudentCourse.studentId}});
    if(!student){
    throw new NotFoundException()
    }
    /* You can check if course with given ID exists aswell here in the same way with CourseRepository */
    
    await this.studentCourseRepository.save(createStudentCourse)
    
    
  }
}