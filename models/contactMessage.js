import { Schema, model } from 'mongoose'

const contactMessageSchema = new Schema({
  companyName: { // 修改字段名稱
    type: String,
    required: [true, '公司名稱必填']
  },
  companyId: { // 修改字段名稱
    type: String,
    required: [true, '公司統編必填']
  },
  contactName: { // 修改字段名稱
    type: String,
    required: [true, '聯絡人姓名必填']
  },
  contactPhone: { // 修改字段名稱
    type: String,
    required: [true, '聯絡人電話必填']
  },
  message: {
    type: String,
    required: [true, '訊息必填']
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('ContactMessage', contactMessageSchema)
