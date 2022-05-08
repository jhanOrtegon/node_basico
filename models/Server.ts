import express, { Application, json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { router as routerUser } from '../routes/users'
import { Enpoints } from '../types'

dotenv.config()

class Server {
    private PORT: string
    private app: Application

    constructor() {
        console.clear()
        this.PORT = process.env.PORT as string
        this.app = express()
        this.middellwares()
        this.routes()
    }

    routes(): void {
        this.app.use(Enpoints.usuarios, routerUser)
    }

    middellwares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.info('server run in port ' + this.PORT)
        })
    }
}

export default Server