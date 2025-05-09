import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

type ResponseData = {
  success: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    console.error('Missing environment variables:', {
      EMAIL_USER: !!process.env.EMAIL_USER,
      EMAIL_PASS: !!process.env.EMAIL_PASS,
      EMAIL_TO: !!process.env.EMAIL_TO
    })
    return res.status(500).json({
      success: false,
      message: 'Server configuration error. Please contact the administrator.'
    })
  }

  try {
    const { name, email, company, project, budget, timeline } = req.body

    // Validate required fields
    if (!name || !email || !project) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and project description are required'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('Email transporter verified successfully')
    } catch (error) {
      console.error('Transporter verification failed:', error)
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error'
      })
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2643d3;">New Contact Form Submission</h2>
          <p>A new message has been submitted through the contact form.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1c2237; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #1c2237; margin-top: 0;">Project Details</h3>
            <p><strong>Project Description:</strong></p>
            <p style="white-space: pre-wrap;">${project}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(adminMailOptions)
    console.log('Email sent successfully')

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.'
    })
  }
} 