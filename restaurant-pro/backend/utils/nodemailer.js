import nodemailer from 'nodemailer';

export const sendReservationEmail = async (reservation) => {
  try {
    if (!process.env.SMTP_USER) {
      console.log(`[Email Mock Service] Reservation Confirmation email sent to ${reservation.email} for date ${reservation.date} at ${reservation.time}`);
      return true;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const mailOptions = {
      from: '"Grand Restaurant Sanctuary" <reservations@grandrestaurant.com>',
      to: reservation.email,
      subject: '✨ Table Reservation Confirmation - Grand Restaurant',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0D0D0D; color: #E0E0E0; padding: 30px; border-radius: 8px; border: 1px solid #C8A165;">
          <h1 style="color: #C8A165; text-align: center;">GRAND RESTAURANT</h1>
          <p style="text-align: center; color: #AAA; font-style: italic;">Fine Dining Sanctuary</p>
          <hr style="border: 0; border-top: 1px solid #333; margin: 20px 0;" />
          <h2 style="color: #FFF;">Dear ${reservation.name},</h2>
          <p>We are delighted to confirm your upcoming dining reservation at Grand Restaurant.</p>
          <div style="background-color: #161616; padding: 20px; border-left: 4px solid #C8A165; margin: 20px 0;">
            <p><strong>Date:</strong> ${reservation.date}</p>
            <p><strong>Time:</strong> ${reservation.time}</p>
            <p><strong>Guests:</strong> ${reservation.guests} Guest(s)</p>
            <p><strong>Table Setting:</strong> ${reservation.tableType}</p>
          </div>
          <p>If you have any specific dietary requirements or changes, please reply to this email or call us at +1 (800) 555-GRAND.</p>
          <p style="margin-top: 30px; color: #C8A165;">Warm regards,<br />Chef Lucian Vance & Grand Restaurant Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error.message);
    return false;
  }
};
