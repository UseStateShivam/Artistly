import { steps } from '@/lib/constants/steps';
import SectionHeader from './ui/section-header';
import WorkingProcessCard from './ui/working-process-card';


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
                    <SectionHeader
                        title="WORKING PROCESS"
                        subtitle="Our Step-by-Step Approach"
                        description="We follow a systematic process to ensure the best results for our clients. Our team is dedicated to making your experience seamless and enjoyable."
                        align="left"
                    />
                    <div>
                        <img
                            src="/process.png"
                            alt="Working Process"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-[40%] justify-end">
                    {steps.map((step, idx) => (
                        <WorkingProcessCard step={step} idx={idx} key={idx}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkingProcess;
