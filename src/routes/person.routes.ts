import { Router } from 'express'
import { create, getAll, getByDni, getById, importExcel, remove, removeMultiple, update } from '../controllers/person.controller'
import upload from '../helpers/file.helper'
import { requireAuth } from '../middlewares/require-auth'

const router = Router()

router.get('/people/dni/:dni', getByDni)

router.get('/people', requireAuth, getAll)
router.get('/people/:id', getById)
router.post('/people', requireAuth, create)
router.put('/people/:id', requireAuth, update)
router.patch('/people/remove-multiple', requireAuth, removeMultiple)
router.delete('/people/:id', requireAuth, remove)

router.post('/people/import-excel', requireAuth, upload.single('excel-file'), importExcel)

export default router
