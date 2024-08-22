import { Router } from 'express'
import * as auth from '../middlewares/auth.js'
import admin from '../middlewares/admin.js'
import contactMessageController from '../controllers/contactMessage.js'

const router = Router()

// 提交聯絡表單
router.post('/contactMessage', contactMessageController.createMessage)

// 獲取所有聯絡表單紀錄
router.get('/', auth.jwt, contactMessageController.getMessages)

// 如果需要管理員權限才可以獲取所有紀錄，則可以這樣設置
router.get('/all', auth.jwt, admin, contactMessageController.getAllMessages)

export default router
