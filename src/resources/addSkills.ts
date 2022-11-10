import { Request, Response } from "express"
import { prisma } from "../config/prisma"

export class AddSkills {

    async handle (req: Request, res: Response) {
        try {

            const { skill_code, year} = req.body
        
        
            const response = await prisma.skill.create({
                data: {
                    skill_code: skill_code,
                    year: year
                }
            })
    
            return res.json({ response })
        } catch (err) {
            return res.json({
                error: err.message
            })
        }

    }
}