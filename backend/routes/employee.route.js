import express from 'express'
import { Router } from 'express'
import {
  addEmployee,
  deleteEmployee,
  getAllEmployees,
  loginEmployee,
  logoutEmployee,
  editEmployeeWithRelations,
} from '../controllers/employee.controller.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = Router()

router.post('/addEmployee', addEmployee)
router.post('/loginEmployee', loginEmployee)
router.post('/logoutEmployee', authMiddleware, logoutEmployee)
router.post('/deleteEmployee', deleteEmployee)
// router.post('/updateEmployee', updateEmployee)
router.get('/getAllEmployees', getAllEmployees)
router.put('/:id/with-relations', editEmployeeWithRelations);


export default router
