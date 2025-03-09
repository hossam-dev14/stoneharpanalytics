import { sendEmail } from "@/lib/nodemailer";

export async function POST(request) {
  try {
    // Extract data from the request body
    const { fullName, emailAddress, phoneNumber, subject, message } =
      await request.json();

    console.log("Request data:", {
      fullName,
      emailAddress,
      phoneNumber,
      subject,
      message,
    });

    // Call the sendEmail function with the extracted data
    const result = await sendEmail({
      fullName,
      emailAddress,
      phoneNumber,
      subject,
      message,
    });

    if (result.success) {
      return new Response(
        JSON.stringify({ message: "Email sent successfully" }),
        {
          status: 200,
        },
      );
    } else {
      return new Response(
        JSON.stringify({
          message: "Failed to send email",
          error: result.error,
        }),
        {
          status: 500,
        },
      );
    }
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
