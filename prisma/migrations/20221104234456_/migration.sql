-- CreateTable
CREATE TABLE "skills" (
    "id" TEXT NOT NULL,
    "skill_code" TEXT NOT NULL,
    "description" TEXT,
    "year" TEXT[],

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "total_points" INTEGER NOT NULL,
    "class_id" TEXT NOT NULL,
    "exam_date" TEXT NOT NULL,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams_skills" (
    "id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "class_id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,

    CONSTRAINT "exams_skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "schoolar_year" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students_exams" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,
    "total_points" INTEGER NOT NULL,

    CONSTRAINT "students_exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students_exams_skills" (
    "id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "exam_id" TEXT NOT NULL,
    "skill_id" TEXT NOT NULL,
    "skill_points" INTEGER,

    CONSTRAINT "students_exams_skills_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_skill_code_key" ON "skills"("skill_code");

-- AddForeignKey
ALTER TABLE "exams_skills" ADD CONSTRAINT "exams_skills_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exams_skills" ADD CONSTRAINT "exams_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_exams" ADD CONSTRAINT "students_exams_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_exams" ADD CONSTRAINT "students_exams_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_exams_skills" ADD CONSTRAINT "students_exams_skills_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_exams_skills" ADD CONSTRAINT "students_exams_skills_exam_id_fkey" FOREIGN KEY ("exam_id") REFERENCES "exams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students_exams_skills" ADD CONSTRAINT "students_exams_skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
