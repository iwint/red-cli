import { Router } from 'express'
import authRouter from './auth.route'

const router = Router()

//AUTH
router.use('/auth', authRouter)

export default router