import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, adventureType, startDate, endDate, participants, specialRequests } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'sudeepasanthanam2004@gmail.com',
        pass: process.env.EMAIL_PASS || 'zgmsrtuwupkpaduh'
      }
    });

    // Email to customer only
    const customerMailOptions = {
      from: process.env.EMAIL_USER || 'sudeepasanthanam2004@gmail.com',
      to: email,
      subject: 'Adventure Booking Confirmation - Adventure Tours',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f4f4f4; padding: 20px;">
          <div style="background-color: #181d1f; color: #e6e94f; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Adventure Tours</h1>
            <p style="margin: 10px 0 0 0; font-size: 16px;">Your Adventure Awaits!</p>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #181d1f; margin-bottom: 20px;">Booking Confirmation</h2>
            
            <p style="color: #333; line-height: 1.6;">Dear ${name},</p>
            
            <p style="color: #333; line-height: 1.6;">Thank you for choosing Adventure Tours! We're excited to confirm your booking for an amazing adventure experience.</p>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #181d1f; margin-top: 0;">Booking Details:</h3>
              <ul style="color: #333; line-height: 1.8;">
                <li><strong>Adventure Type:</strong> ${adventureType}</li>
                <li><strong>Start Date:</strong> ${startDate}</li>
                <li><strong>End Date:</strong> ${endDate}</li>
                <li><strong>Number of Participants:</strong> ${participants}</li>
                ${specialRequests ? `<li><strong>Special Requests:</strong> ${specialRequests}</li>` : ''}
              </ul>
            </div>
            
            <p style="color: #333; line-height: 1.6;">Our team will review your booking and contact you within 24 hours to confirm all details and provide additional information about your adventure.</p>
            
            <p style="color: #333; line-height: 1.6;">If you have any questions, please don't hesitate to reach out to us at support@adventure-tours.com or call us at +1-555-ADVENTURE.</p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://adventure-tours.com" style="background-color: #e6e94f; color: #181d1f; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">Visit Our Website</a>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px; text-align: center;">
              Thank you for choosing Adventure Tours!<br>
              Let's make your adventure dreams come true!
            </p>
          </div>
        </div>
      `
    };

    // Send email only to customer
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Booking confirmation sent to your email!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
