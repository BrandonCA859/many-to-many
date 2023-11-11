
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './students.service';
import { StudentsController } from './students.controller';
import { Student } from './entities/student.entity';
import { StudentCourse } from 'src/courses/entities/student-course.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student, StudentCourse]), 
  ],
  providers: [StudentService],
  controllers: [StudentsController],
})
export class StudentModule {}
