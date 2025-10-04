export const dynamic = 'force-dynamic';

import Marquee from "react-fast-marquee";

export default async function Clients() {
    const clients = [
        { src: "/images/aribnd.png", alt: "Airbnb" },
        { src: "/images/adobe.png", alt: "Adobe" },
        { src: "/images/BMW.png", alt: "BMW" },
        { src: "/images/canadian.png", alt: "canadian" },
        { src: "/images/Carniba.png", alt: "Carniba" },
        { src: "/images/aribnd.png", alt: "Airbnb" },
        { src: "/images/adobe.png", alt: "Adobe" },
        { src: "/images/BMW.png", alt: "BMW" },
        { src: "/images/canadian.png", alt: "canadian" },
        { src: "/images/Carniba.png", alt: "Carniba" },
    ];

    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    Founders & Marketers <span className="text-[#6cc17b]">Love Us</span>
                </h1>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    Trusted by top companies around the world
                </p>
            </div>

            {/* Marquee */}
            <div className="w-full">
                <Marquee
                    speed={40}
                    pauseOnHover
                    gradient={false}
                    className="gap-12"
                >
                    {clients.map((client, idx) => (
                        <div key={idx} className="flex items-center justify-center mx-10 grayscale hover:grayscale-0 transition duration-300">
                            <img
                                src={client.src}
                                alt={client.alt}
                                className="h-12 sm:h-16 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
