
import Link from "next/link";
import {Navbar} from "./navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between mx-auto px-4">
        <Navbar />
      </div>
    </header>
  );
}