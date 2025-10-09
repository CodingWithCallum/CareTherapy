import "../globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Blog"
}

export default function OurBlog() {
    return(
        <main>
            <section className="">
                <div className="max-w-7xl mx-auto sm:px-10 md:px-12 lg:px-5 md:flex-row gap-16 justify-items-center">
                    <h1 className="mt-6 text-3xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight font-bold text-gray-900">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-600 via-sky-700 to-blue-900">Our Blog</span>
                    </h1>
                    <p className="pt-10">
                        Our blog is coming soon! Stay tuned for updates on our latest articles, tips, and insights into movement health and exercise therapy.
                    </p>
                </div>
            </section>
        </main>
    )
}