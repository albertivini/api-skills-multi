import { prisma } from "../config/prisma";
import { Request, Response } from "express";
import { ISkills } from "../interfaces/ISkills";

export class AddPoints {

    async handle(req: Request, res: Response) {
        try {
            const { exam_id, student_id, class_id, skills, total_points } = req.body

            const response = await prisma.studentExam.create({
                data: {
                    exam_id,
                    student_id,
                    class_id,
                    total_points
                }
            })
    
            for (const skill of skills as ISkills[]) {
                await prisma.studentExamSkills.create({
                    data: {
                        class_id,
                        exam_id,
                        skill_id: skill.skill_id,
                        skill_points: skill.skill_points,
                        student_id
                    }
                })
            }
    
            return res.json({ response })
        } catch (err) {
            return res.json({ error: err.message })
        }
    }
}