import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentService) {}

  @Post()
  async createStudentCourse(@Body() createStudentCourse: {studentId: number, courseId: number}) {
   await this.studentsService.createStudentCourse(createStudentCourse);
  }
}