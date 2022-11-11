import express, { json, NextFunction, Request, Response } from "express"
import cors from "cors"
import { routes } from "./routes/routes"

const app = express()

app.use(json())
app.use(routes)

app.use((req: Request, res: Response, next: NextFunction) => {
    
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    app.use(cors())
    next()
})

app.listen(process.env.PORT || 3000)

