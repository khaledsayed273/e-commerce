export async function GET() {
    try {
        const response = await fetch(`https://cloud.umami.is/script.js`);
        if (!response.ok) return

        const script = await response.text();

        return new Response(script, {
            status: 200,
            headers: { "Content-Type": "application/javascript" },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: "Error fetching Umami script" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
