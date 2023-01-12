import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import certificateRoutes from './routes/person.routes'
import userRoutes from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api/v1', certificateRoutes)
app.use('/api/v1/auth', userRoutes)

export default app
