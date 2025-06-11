import React, { useEffect, useState } from "react";
import SkipCard from "./SkipCard";

const SkipsList = () => {
  
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=LE10&area=1sh") // 🔁 replace with your actual API
      .then((response) => response.json())
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch skips:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading skips...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skips.map((skip) => (
        <SkipCard
            key={skip.id}
            size={skip.size}
            price={skip.per_tonne_cost}
            hiredays={skip.hire_period_days}
            imageSrc={"/images/skip4.png"}
            warnings={skip.warnings}
            //selected={selectedSize === skip.size}
            onSelect={() => setSelectedSize(skip.size)}
            onImageClick={(img) => setModalImage(img)}
          
        />
      ))}
    </div>
    
  );
};

export default SkipsList;
