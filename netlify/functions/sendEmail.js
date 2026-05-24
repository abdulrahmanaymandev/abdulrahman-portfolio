export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    const res = await fetch(
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

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
}