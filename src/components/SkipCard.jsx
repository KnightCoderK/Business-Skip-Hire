
import React from "react";
import {
  AlertTriangle
} from "lucide-react" ;
const SkipCard = ({
  size,
  price,
  hiredays,
  disabled,
  allowed_on_road,
  allows_heavy_waste,
  imageSrc,
  selected,
  onSelect,
  onImageClick
}) => {
const cardClass = `border rounded-md p-4 bg-gray-900 text-white transition-all duration-200 
  ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-500'} 
  ${selected ? 'border-blue-500' : 'border-gray-700'}`;


  const buttonClass = `mt-3 w-full py-2 text-sm rounded ${
    selected ? 'bg-blue-600' : 'bg-gray-700 hover:bg-blue-600'
  }`;

  return (
    <div className={cardClass}>
      <div className="relative cursor-pointer" onClick={() => onImageClick(imageSrc)}>
        <img src={imageSrc} alt={`${size} Yard Skip`} className="w-full h-36 md:h-48 object-cover rounded-md mb-4" />
        <span className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
          {size} Yards
        </span>
        {(allowed_on_road || allows_heavy_waste) && (
          <div className="absolute bottom-3 left-2 z-20 space-y-2">
            {allowed_on_road && (
              <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
            
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span className="text-xs font-medium text-yellow-500">
                Not Allowed On The Road
              </span>
              </div>
            )}
            {allows_heavy_waste && (
              <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
             <span className="text-xs font-medium text-red-500">
                Not Suitable for Heavy Waste
              </span>
              </div>
            )}
          </div>
        )}
      </div>
      <h2 className="mt-2 text-lg font-semibold">{size} Yard Skip</h2>
      <p className="text-sm text-gray-400">{hiredays} day hire period</p>
      <p className="text-xl font-bold text-blue-400 mt-2">£{price}</p>
      <button
        className={buttonClass}
        disabled={disabled}
        onClick={onSelect}
        
      >
        {selected ? "Selected" : "Select This Skip →"}
      </button>
      

      
    </div>
  );
};

export default SkipCard;
