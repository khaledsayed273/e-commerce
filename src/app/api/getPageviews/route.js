export async function GET(req) {
    const searchParams = req.nextUrl.searchParams;
    const endAt = searchParams.get('endAt')
    const startAt = searchParams.get('startAt')
    const timeZone = searchParams.get('timeZone')
    try {
        const response = await fetch(`https://api.umami.is/v1/websites/114e5419-ed6c-4dfa-a261-508da0110e36/pageviews?startAt=${startAt}&endAt=${endAt}&unit=day&timezone=${timeZone}`, {
            headers: {
                "x-umami-api-key": "7c11NsPZu44lCHKuU9CTaK1fS5jOWhOd",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch Umami Pageviews");
        }

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Error fetching data" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}