import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '業主名稱必填']
  },
  year: {
    type: Number,
    required: [true, '年份必填'],
    min: [0, '年份不能小於 0']
  },
  image: {
    type: String,
    required: [true, '圖片必填']
  },
  description: {
    type: String,
    required: [true, '說明必填']
  },
  category: {
    type: String,
    required: [true, '分類必填'],
    enum: {
      values: ['原水處理系統規劃設計及施工', '純水及超純水系統規劃設計及施工', '特殊廢水回收系統規劃設計及施工', '製程液純化系統規劃設計及施工', '冷凝水回收系統規劃設計及施工', '冷卻水塔旁濾系統規劃設計及施工', '其他'],
      message: '分類錯誤'
    }
  },
  sell: {
    type: Boolean,
    required: [true, '新增狀態必填']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
