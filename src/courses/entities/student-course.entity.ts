import { Student } from "src/students/entities/student.entity";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Course } from "./course.entity";

@Entity('student_course')
export class StudentCourse {
  @PrimaryColumn({ name: 'student_id' })
  studentId: number;

  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  @ManyToOne(
    () => Student,
    student => student.courses,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students: Student[];

  @ManyToOne(
    () => Course,
    course => course.students,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  courses: Course[];
}