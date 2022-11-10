import { Request, Response } from "express"
import { prisma } from "../config/prisma"

export class AddExam {

    async handle (req: Request, res: Response) {
        try {

            const { name, class_id, skills, exam_date, total_points } = req.body
            
            const skills_id_array = skills.map(skill => {
                skill.skill_id
            })
            
            const response = await prisma.exam.create({
                data: {
                    name,
                    total_points,
                    class_id,
                    exam_date,
                }
            })

            for (const skill of skills) {
                await prisma.examSkills.create({
                    data: {
                        class_id,
                        points: skill.skill_points,
                        exam_id: response.id,
                        skill_id: skill.skill_id,
                    }
                })
            }
    
            return res.json({ message: 'added' })
        } catch (err) {
            console.log(err)
            return res.json({
                error: err.message
            })
        }

    }
}