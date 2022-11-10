import { Router } from "express";
import { AddExam } from "../resources/addExam";
import { AddPoints } from "../resources/addPoints";
import { AddSkills } from "../resources/addSkills";
import { ReportAverageStudentClassSkill } from "../resources/reportAverageStudentClassSkill";
import { ReportTotalSkillStudents } from "../resources/reportTotalSkillStudents";

const routes = Router()

const addSkill = new AddSkills()
const addExam = new AddExam()
const addPoints = new AddPoints()
const reportTotalSkillStudents = new ReportTotalSkillStudents()
const reportAverageStudentClassSkill = new ReportAverageStudentClassSkill()

routes.post('/skill', (req, res) => { return addSkill.handle(req, res)} )
routes.post('/exam', (req, res) => { return addExam.handle(req, res)} )
routes.post('/exam/points', (req, res) => { return addPoints.handle(req, res)} )
routes.get('/report/:class_id/skill-student', (req, res) => { return reportTotalSkillStudents.handle(req, res)})
routes.get('/report/:class_id/student/:student_id/skill/:skill_id', (req, res) => { return reportAverageStudentClassSkill.handle(req, res)})

export { routes }