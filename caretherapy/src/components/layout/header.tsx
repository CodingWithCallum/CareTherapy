
import Link from "next/link";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-foreground">
            CareTherapy
          </span>
        </Link>
        
        <Navigation />
      </div>
    </header>
  );
}