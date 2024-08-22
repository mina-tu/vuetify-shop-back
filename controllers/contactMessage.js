import { StatusCodes } from 'http-status-codes'
import ContactMessage from '../models/contactMessage.js'

// 保存聯絡表單數據
const createMessage = async (req, res) => {
  const { companyName, companyId, contactName, contactPhone, message } = req.body
  try {
    const newMessage = new ContactMessage({
      companyName,
      companyId,
      contactName,
      contactPhone,
      message
    })
    await newMessage.save()
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Message saved successfully!'
    })
  } catch (error) {
    console.error('Error saving message:', error) // 顯示錯誤詳情
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to save message'
    })
  }
}

// 獲取所有聯絡表單紀錄
const getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find()
    res.status(StatusCodes.OK).json({
      success: true,
      result: messages
    })
  } catch (error) {
    console.error('Error fetching messages:', error) // 顯示錯誤詳情
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to fetch messages'
    })
  }
}

// 如果需要管理員權限才可以獲取所有紀錄，則可以這樣設置
const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find()
    res.status(StatusCodes.OK).json({
      success: true,
      result: messages
    })
  } catch (error) {
    console.error('Error fetching messages:', error) // 顯示錯誤詳情
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Failed to fetch messages'
    })
  }
}

export default { createMessage, getMessages, getAllMessages }
