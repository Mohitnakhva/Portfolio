import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json({ limit: '20kb' }))

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 3000 },
}, { timestamps: true })
const Message = mongoose.model('Message', messageSchema)

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body ?? {}
    if (![name, email, message].every(value => typeof value === 'string' && value.trim())) {
      return res.status(400).json({ message: 'Name, email, and message are required.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' })
    }
    const saved = await Message.create({ name, email, message })
    return res.status(201).json({ message: 'Message received.', id: saved._id })
  } catch (error) {
    console.error('Contact endpoint error:', error.message)
    return res.status(500).json({ message: 'Could not save your message. Please try again later.' })
  }
})

const port = process.env.PORT || 5000
try {
  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mohit_portfolio')
  console.log('MongoDB connected')
  app.listen(port, () => console.log(`Portfolio API running on http://localhost:${port}`))
} catch (error) {
  console.error('MongoDB connection failed:', error.message)
  process.exit(1)
}
