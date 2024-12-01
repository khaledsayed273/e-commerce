export async function GET(request) {
  try {
    const response = await fetch("https://cloud.umami.is/share/voLcLqcmExb1dqFc/api/analytics/0945ca12-dd11-44a9-9292-9a2c9ed505a5", {
      headers: {
        "x-umami-api-key": "7c11NsPZu44lCHKuU9CTaK1fS5jOWhOd",
      },
    });

    // التحقق من استجابة البيانات
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json(); 
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",  
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ message: "Error fetching data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}