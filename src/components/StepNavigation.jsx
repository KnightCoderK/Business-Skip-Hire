import React from 'react';
import {
  MapPin,
  Trash2,
  Truck,
  FileSearch,
  CalendarDays,
  CreditCard
} from "lucide-react" ;

const StepNavigation = ({ activeStep = 2 }) => {
const steps = [
    { label: "Postcode", icon: <MapPin size={16} color="blue"/>, active: true },
    { label: "Waste Type", icon: <Trash2 size={16} color="blue"/>, active: true },
    { label: "Select Skip", icon: <Truck size={16} color="blue"/>, active: true },
    { label: "Permit Check", icon: <FileSearch size={16} />, active: false },
    { label: "Choose Date", icon: <CalendarDays size={16} />, active: false },
    { label: "Payment", icon: <CreditCard size={16} />, active: false }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 md:justify-between max-w-6xl mx-auto mt-6 px-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center">
          <div
            className={`flex items-center gap-2 text-sm md:text-base px-3 py-2 
              ${idx <= activeStep ? 'text-white' : 'text-gray-600'}
            `}
          >
            <span className="text-lg">{step.icon}</span>
            <span>{step.label}</span>
          </div>
          {idx < steps.length - 1 && (
            <div className="hidden md:block w-8 h-0.5 bg-gray-400 mx-1"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;
