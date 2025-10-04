export const dynamic = 'force-dynamic';

import Marquee from "react-fast-marquee";

export default async function Clients({ data }) {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    {data.title}
                </h1>
                <p className="mt-4 text-gray-600 text-sm sm:text-base">
                    {data.description}
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
                    {data?.logos.map((logo, idx) => (
                        <div key={idx} className="flex items-center justify-center mx-10 grayscale hover:grayscale-0 transition duration-300">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 sm:h-16 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}
