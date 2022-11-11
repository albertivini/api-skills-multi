import express, { json, NextFunction, Request, Response } from "express"
import cors from "cors"
import { routes } from "./routes/routes"

const app = express()

app.use(cors({
    origin: '*'
}))

app.use(json())

app.use(routes)

app.listen(process.env.PORT || 3000)

