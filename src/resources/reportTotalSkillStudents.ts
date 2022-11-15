import { Request, Response } from "express"
import { prisma } from "../config/prisma"

export class ReportTotalSkillStudents {

    async handle (req: Request, res: Response) {

        const { class_id } = req.params

        const db_response = await prisma.studentExamSkills.findMany({
            where: {
                class_id
            }
        })

        const exam_response = await prisma.examSkills.findMany({
            where: {
                class_id
            }
        })
        
        const skill_ids = db_response.map(response => response.skill_id)

        const total_points_all_skills = db_response.reduce((qtd_acumulada, qtd_total) => {
            return qtd_acumulada + qtd_total.skill_points
        }, 0)

        const skill_ids_unique = [...new Set(skill_ids)]

        const response = []

        for (const skill of skill_ids_unique) {
            const skilled_arr = db_response.filter(response => response.skill_id === skill)

            const exam_skill_arr = exam_response.filter(response => response.skill_id === skill)

            const points_distributed_by_skill = exam_skill_arr.reduce((qtd_acumulada, qtd_atual) => {
                return qtd_acumulada + qtd_atual.points
            }, 0)

            const arr_lenght = skilled_arr.length

            const total_points_distributed = Number((points_distributed_by_skill * arr_lenght).toFixed(2))

            const total_points_received = skilled_arr.reduce((qtd_acumulada, qtd_atual) => {
                return qtd_acumulada + qtd_atual.skill_points
            }, 0)

            const skill_average = total_points_received / arr_lenght

            const skill_percentage = Number(((total_points_received * 100) / total_points_all_skills).toFixed(2))

            const response_object = {
                skill_id: skill,
                total_points_distributed,
                total_points_received,
                average_points: skill_average,
                skill_percentage
            }

            response.push(response_object)
        }

        return res.json(response)

    }
}