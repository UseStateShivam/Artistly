import { steps } from '@/lib/constants/steps';
import SectionHeader from './ui/section-header';
import WorkingProcessCard from './ui/working-process-card';
import Image from 'next/image';

function WorkingProcess() {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-36 md:py-16 lg:py-16 relative mb-16">
      {/* Decorative background image */}
      <div className="absolute top-[8%] left-0 scale-[33%] pointer-events-none select-none hidden lg:block">
        <Image
          src="/about-free-hand.png"
          alt="hero free hand"
          width={400}
          height={400}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>

      {/* Responsive flex layout */}
      <div className="mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section: Text + Image */}
        <div className="flex flex-col gap-10 w-full lg:w-[50%]">
          <SectionHeader
            title="WORKING PROCESS"
            subtitle="Our Step-by-Step Approach"
            description="We follow a systematic process to ensure the best results for our clients. Our team is dedicated to making your experience seamless and enjoyable."
            align="left"
          />
          <div>
            <Image
              src="/process.png"
              alt="Working Process"
              width={800}
              height={400}
              className="rounded-2xl w-full object-cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Right Section: Steps */}
        <div className="flex flex-col gap-4 w-full lg:w-[50%] lg:justify-end">
          {steps.map((step, idx) => (
            <WorkingProcessCard step={step} idx={idx} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
