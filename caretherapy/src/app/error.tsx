"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

/**
 * Next.js Error Page
 *
 * This is automatically rendered when an error is thrown in a page component.
 * It's a special file recognized by Next.js App Router.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-card border rounded-2xl p-8 shadow-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-6">
            <AlertTriangle className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-bold mb-3">Something went wrong</h1>

          <p className="text-muted-foreground mb-6">
            We apologize for the inconvenience. An unexpected error has occurred while loading this page.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-6 text-left">
              <p className="text-sm font-mono text-destructive break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={reset} className="gap-2">
              <RefreshCw className="w-4 h-4" />
              Try Again
            </Button>
            <Button asChild variant="outline" className="gap-2 w-full sm:w-auto">
              <Link href="/">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            If this problem persists, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
