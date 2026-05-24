export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    console.log("Incoming data:", { name, email, message });

    const response = await fetch(
      "https://formsubmit.co/ajax/abdulrahman.ayman.dev@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    const text = await response.text();
    console.log("Raw response:", text);

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        raw: text,
      }),
    };
  } catch (error) {
    console.error("Function crashed:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
}