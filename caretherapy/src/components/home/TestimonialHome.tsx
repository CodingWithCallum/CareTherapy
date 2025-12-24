import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'Nick Rogan',
            role: 'Account Executive',
            avatar: 'NR',
            content: 'I had an excellent experience with CARE Therapy. I worked with Cameron on a tailored rehabilitation program for my leg, after a fall whilst running, and the results have been outstanding. Their evidence based approach and attention to detail made a significant difference in my recovery. The exercises were well structured, easy to follow, and adapted to my specific needs. My leg feels much better, and I’ve gained both strength and confidence in my movement. I highly recommend CARE Therapy for anyone seeking professional, personalized rehabilitative care',
        },
        {
            name: 'Callum Barry',
            role: 'Software Developer',
            avatar: 'CB',
            content: "Cameron helped me start my training plan to rebuild my running strength after a period of time away from running due to injury. Within weeks, I noticed significant improvements and recently started to run more freely with less pain. His insights into running form and strength training have been invaluable. I highly recommend him to anyone looking to improve their performance or return from injury.",
        },
        {
            name: 'Joan',
            role: 'Retired',
            avatar: 'J',
            content: 'Before working with Cameron, I had been living with vertigo and drop foot. I was unsteady and becoming increasingly reliant on my cane for walking. Since starting our Adapted Exercise sessions, my balance and walking have improved so much that I now only use my cane occasionally. I feel stronger, more stable, and more confident moving throughout my day. I’m also sleeping better, feeling more positive, and experiencing far less pain.',
        },
        {
            name: 'Tara Pohl',
            role: 'Medical Officer - Intern',
            avatar: 'TP',
            content: 'Cameron has been instrumental in my recovery from a sports injury. His expertise in rehabilitation and personalized training plans have made a significant difference in my progress readying myself for my next trail run later this year. I highly recommend him to anyone looking to improve their fitness or recover from an injury.',
        },
    ]

    return (
        <section>
            <div className="py-10">
                <div className="@container mx-auto w-full max-w-7xl px-6">
                    <div className="mb-12">
                        <h2 className="text-foreground text-4xl font-semibold">What Our Clients Say</h2>
                        <p className="text-muted-foreground my-4 text-balance text-lg">Discover why our clients love working with us. Read their testimonials about our dedication to excellence, innovative approach, and exceptional customer service.</p>
                    </div>
                    <div className="@lg:grid-cols-2 @3xl:grid-cols-4 grid gap-4">
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <div className="bg-background ring-foreground/10 rounded-2xl rounded-bl border border-transparent px-4 py-3 ring-1">
                                    <p className="text-foreground line-clamp-4">{testimonial.content}</p>
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    {/* <Avatar className="ring-foreground/10 size-6 border border-transparent shadow ring-1">
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar> */}
                                    <div className="text-foreground text-sm font-medium">{testimonial.name}</div>
                                    <span aria-hidden className="bg-foreground/25 size-1 rounded-full"></span>
                                    <span className="text-muted-foreground text-sm">{testimonial.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
                    <Link href="/testimonials">
                    <Button size="lg" className="text-base">
                        View All Success Stories
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}