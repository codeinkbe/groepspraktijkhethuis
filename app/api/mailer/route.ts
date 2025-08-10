import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phoneNumber, message } = await request.json()

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables')
      return NextResponse.json(
        { success: false, message: 'Email configuration error' },
        { status: 500 }
      )
    }

    // Create transporter with updated settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    })

    // Alternative Gmail configuration (uncomment if switching to Gmail):
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS, // Use Gmail App Password
    //   },
    // })

    // Verify transporter configuration
    try {
      await transporter.verify()
      console.log('Email transporter verified successfully')
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError)
      return NextResponse.json(
        { success: false, message: 'Email configuration error' },
        { status: 500 }
      )
    }

    // Email content
    const mailOptions = {
      from: `"Groepspraktijk Het Huis" <${process.env.EMAIL_USER}>`,
      to: 'jeroen@codeink.be', // Updated to use the correct email
      subject: `Nieuw contactformulier bericht van ${firstName} ${lastName}`,
      html: `
        <h2>Nieuw bericht van het contactformulier</h2>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phoneNumber}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('Error sending email:', error)
    
    // Provide more specific error messages
    if (error.code === 'EAUTH') {
      return NextResponse.json(
        { success: false, message: 'Email authentication failed. Please check your credentials.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email',
        error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
      },
      { status: 500 }
    )
  }
}
