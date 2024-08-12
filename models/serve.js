import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '名稱必填']
  },
  image: {
    type: String,
    required: [true, '圖片必填']
  },
  description: {
    type: String,
    required: [true, '說明必填']
  },
  sell: {
    type: Boolean,
    required: [true, '新增狀態必填']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('serve', schema)
