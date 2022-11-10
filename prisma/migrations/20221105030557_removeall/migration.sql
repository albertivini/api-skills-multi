-- DropForeignKey
ALTER TABLE "students_exams" DROP CONSTRAINT "students_exams_exam_id_fkey";

-- DropForeignKey
ALTER TABLE "students_exams" DROP CONSTRAINT "students_exams_student_id_fkey";

-- DropForeignKey
ALTER TABLE "students_exams_skills" DROP CONSTRAINT "students_exams_skills_exam_id_fkey";

-- DropForeignKey
ALTER TABLE "students_exams_skills" DROP CONSTRAINT "students_exams_skills_skill_id_fkey";

-- DropForeignKey
ALTER TABLE "students_exams_skills" DROP CONSTRAINT "students_exams_skills_student_id_fkey";
