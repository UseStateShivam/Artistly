import React from 'react';
import { CheckCircle } from 'lucide-react';

const steps = [
    {
        step: 'Step - 01',
        title: 'Book a Service',
        points: [
            'Choose your desired artist service online or give us a call.',
            'Share your specific artist needs for a tailored experience.',
            'Select your preferred date and time.',
        ],
    },
    {
        step: 'Step - 02',
        title: 'We Get to Work',
        points: [
            'Our professional team arrives fully equipped and on time.',
            'Using eco-friendly products, we handle all the details.',
            'From entertainment to specialty tasks, we manage it all.',
        ],
    },
    {
        step: 'Step - 03',
        title: 'Enjoy the Results',
        points: [
            'Inspect your space and feel the difference.',
            'Our satisfaction guarantee ensures peace of mind.',
            'Relax and enjoy the performance, healthier environment.',
        ],
    },
];

function WorkingProcess() {
    return (
        <section className="px-36 py-16 relative mb-16">
            <img
                src="./about-free-hand.png"
                alt="hero free hand"
                className="absolute top-[3.3%] -left-[18%] scale-[12%]"
            />
            <div className="mx-auto text-center flex">
                <div className="flex flex-col gap-10 w-[50%] mx-auto">
                    <div>
                        <p className="text-sm uppercase font-semibold text-[#174f46] tracking-wide mb-3 text-left">
                            Working Process
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#174f46] mb-4 text-left">
                            Our Working process
                        </h2>
                        <p className="text-[#174f46] text-md text-left">
                            We believe in making the working process simple, efficient, and hassle-free for our clients. Our streamlined approach ensures every step is handled with care and professionalism, from booking your service.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/process.png"
                            alt="Working Process"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-[40%] justify-between">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f7f9f8] border border-gray-200 rounded-xl p-6 py-4 shadow-md hover:shadow-lg transition-all flex flex-col items-start"
                        >
                            <span className="inline-block bg-[#b7f27b] text-[#174f46] text-sm px-2 rounded-full mb-3">
                                {step.step}
                            </span>
                            <h3 className="text-xl font-semibold text-[#174f46] mb-2">
                                {step.title}
                            </h3>
                            <ul className="space-y-1 text-[#174f46] text-sm text-left">
                                {step.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle className="text-[#174f46] mt-[2px]" size={18} />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkingProcess;
