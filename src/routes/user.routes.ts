import { Router } from 'express'
import { currentUser, login, register } from '../controllers/user.controller'
import { requireAuth } from '../middlewares/require-auth'

const router = Router()

router.post('/login', login)
router.post('/register', register)
router.get('/current-user', requireAuth, currentUser)

export default router
