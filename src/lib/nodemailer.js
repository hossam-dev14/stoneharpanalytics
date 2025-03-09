import nodemailer from "nodemailer";

// const userEmail = "contact@stoneharpanalytics.com";
// const emailPass = "*sa-pub2025*";

const userEmail = "hossamdev14@gmail.com";
const emailPass = "vfpeqbyrlltakakf";

const transporter = nodemailer.createTransport({
  // host: "mail.stoneharpanalytics.com",
  // host: "giowm1088.siteground.biz", // Outgoing server
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465, // Use 587 if SSL is not required
  secure: true, // Must be true for port 465
  auth: {
    user: userEmail,
    pass: emailPass,
  },
  tls: {
    rejectUnauthorized: false, // Helps avoid SSL certificate issues
  },
});

export const sendEmail = async ({
  fullName,
  emailAddress,
  phoneNumber,
  subject,
  message,
}) => {
  console.log("Sending email with data:", {
    fullName,
    emailAddress,
    phoneNumber,
    subject,
    message,
  });

  const mailOptions = {
    from: userEmail, // Use the email field as the sender
    // to: "scott.taylor@taybecllc.com", // Use your email as the recipient
    to: "hossamdev14@gmail.com",
    subject: subject,
    text: `Name: ${fullName}\nEmail: ${emailAddress}\nPhone: ${phoneNumber}\nMessage: ${message}`, // Combine all fields into the message body
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
