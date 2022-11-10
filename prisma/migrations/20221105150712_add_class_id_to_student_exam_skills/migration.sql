/*
  Warnings:

  - Added the required column `class_id` to the `students_exams_skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "students_exams_skills" ADD COLUMN     "class_id" TEXT NOT NULL;
