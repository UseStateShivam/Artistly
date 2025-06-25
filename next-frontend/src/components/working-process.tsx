import { steps } from '@/lib/constants/steps'; // Import the steps data
import SectionHeader from './ui/section-header'; // Import the section header component
import WorkingProcessCard from './ui/working-process-card'; // Import the working process card component

// WorkingProcess component displays the working process section
function WorkingProcess() {
    return (
        <section className="px-36 py-16 relative mb-16">
            {/* Decorative image in the background */}
            <img
                src="./about-free-hand.png"
                alt="hero free hand"
                className="absolute top-[3.3%] -left-[18%] scale-[12%]"
            />
            <div className="mx-auto text-center flex">
                {/* Left side: Section header and process image */}
                <div className="flex flex-col gap-10 w-[50%] mx-auto">
                    <SectionHeader
                        title="WORKING PROCESS"
                        subtitle="Our Step-by-Step Approach"
                        description="We follow a systematic process to ensure the best results for our clients. Our team is dedicated to making your experience seamless and enjoyable."
                        align="left"
                    />
                    <div>
                        {/* Image illustrating the process */}
                        <img
                            src="/process.png"
                            alt="Working Process"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                </div>
                {/* Right side: List of working process steps */}
                <div className="flex flex-col gap-3 w-[40%] justify-end">
                    {steps.map((step, idx) => (
                        // Render a card for each step
                        <WorkingProcessCard step={step} idx={idx} key={idx}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkingProcess;
