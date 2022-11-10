import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export class ReportAverageStudentClassSkill {

    async handle (req: Request, res: Response) {

        const { class_id, student_id, skill_id} = req.params

        const db_response = await prisma.studentExamSkills.findMany({
            where: {
                class_id,
                skill_id
            }
        })

        const exam_without_student = db_response.filter((response) => response.student_id !== student_id)

        const student_exam = db_response.find((response) => response.student_id = student_id)

        const total_points = exam_without_student.reduce((qtdAcumulada, qtdAtual) => {
            return qtdAcumulada + qtdAtual.skill_points
        }, 0)

        const average_points = Number((total_points / exam_without_student.length).toFixed(2))

        const response_object = {
            class_average_points: average_points,
            student_points: Number((student_exam.skill_points).toFixed(2)),
        }

        return res.json(response_object)
    }

}