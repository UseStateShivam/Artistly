import { CheckCircle } from 'lucide-react';
import React from 'react';

type WorkingProcessStep = {
  step: string
  title: string
  points: string[]
}

type WorkingProcessCardProps = {
  step: WorkingProcessStep
  idx?: number | string
}

const WorkingProcessCard: React.FC<WorkingProcessCardProps> = ({
  step,
  idx,
}) => (
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
)

export default WorkingProcessCard