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
    console.error('Missing required environment variables')
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

    // Create transporter with more reliable configuration
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

    // Email to admin (system owner)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Service Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0070f3;">New Service Request</h2>
          <p>A new service request has been submitted through the SolTech Hub contact form.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Client Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          </div>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Project Details</h3>
            <p><strong>Project Description:</strong></p>
            <p style="white-space: pre-wrap;">${project}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <p><strong>Timeline:</strong> ${timeline}</p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 0.9em;">This is an automated notification from the SolTech Hub contact form.</p>
            <p style="color: #666; font-size: 0.9em;">Please respond to this inquiry within 24 hours.</p>
          </div>
        </div>
      `,
    }

    // Confirmation email to client
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting SolTech Hub',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0070f3;">Thank you for contacting SolTech Hub!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your service request and are excited to work with you. Our team will review your requirements and get back to you within 24 hours.</p>

          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Request Summary</h3>
            <ul style="list-style: none; padding: 0;">
              <li style="margin-bottom: 10px;"><strong>Project Description:</strong><br>${project}</li>
              <li style="margin-bottom: 10px;"><strong>Budget Range:</strong><br>${budget}</li>
              <li style="margin-bottom: 10px;"><strong>Timeline:</strong><br>${timeline}</li>
            </ul>
          </div>

          <div style="background: #e6f3ff; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #0070f3; margin-top: 0;">Next Steps</h3>
            <ol>
              <li>Our team will review your requirements</li>
              <li>We'll contact you to discuss the project in detail</li>
              <li>We'll provide a detailed proposal and timeline</li>
            </ol>
          </div>

          <p>If you have any additional questions or information to share, please don't hesitate to contact us:</p>
          <ul>
            <li>Email: solomonmukonda0@gmail.com</li>
            <li>Phone: +263782980290 / +263719110713</li>
          </ul>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 0.9em;">Best regards,<br>The SolTech Hub Team</p>
            <p style="color: #666; font-size: 0.9em;">This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    console.log('Attempting to send emails...')
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])
    console.log('Emails sent successfully')

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    })
  }
} 