export const runtime = "edge";

export async function GET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      status: "healthy",
      service: "Amazing AI Assistant",
      timestamp: new Date().toISOString(),
      version: "1.0.0",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
