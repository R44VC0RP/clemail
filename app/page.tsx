import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If user is authenticated, redirect to dashboard
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8 p-8">
        <div className="flex flex-col items-center space-y-6">
          <img src="/inbound-logo-3.png" alt="bg by inbound" className="h-24 w-24 rounded-2xl" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            bg by inbound
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Transform emails into code with AI-powered background agents
        </p>
        <div className="flex flex-col space-y-4 max-w-sm mx-auto">
          <Link href="/signin">
            <Button size="lg" className="w-full">
              sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
