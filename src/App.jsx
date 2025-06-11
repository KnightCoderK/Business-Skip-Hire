
import React, { useEffect, useState } from "react";
import SkipCard from "./components/SkipCard";
import StepNavigation from "./components/StepNavigation";


const App = () => {
  
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
      const [selectedHireDays, setSelectedHireDays] = useState(null);
  const [sortKey, setSortKey] = useState("size");
  const [modalImage, setModalImage] = useState(null);

  //const sortedSkips = [...skips].sort((a, b) => a[sortKey] - b[sortKey]);
  const sortedSkips = [...skips].sort((a, b) => {
    if (sortKey === 'price') return a.price - b.price;
    if (sortKey === 'size') return a.size - b.size;
    if (sortKey === 'hirePeriod') return a.hirePeriod - b.hirePeriod;
    return 0;
  });

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 9;

  const totalPages = Math.ceil(sortedSkips.length / cardsPerPage);
  const paginatedCards = sortedSkips.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );
  

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
  if (!loading)
  {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <StepNavigation  activeStep={2}/>
      <br/>

      <div className="text-center mb-6">
        <h2 class="text-2xl font-bold text-center mb-4">Choose Your Skip Size</h2>
        <p class="text-gray-400 text-center mb-8">Select the skip size that best suits your needs</p>
      </div>
     

  <div className="pb-24"> {/* Add bottom padding to avoid floating bar overlap */}
    
{/* Sort Dropdown Outside Container */}
<div className="flex justify-end max-w-6xl mx-auto mt-6">
  <select
    value={sortKey}
    onChange={(e) => setSortOption(e.target.value)}
    className="px-4 py-2 bg-gray-700 text-white rounded border border-gray-600"
  >
    <option value="price">Sort by Price</option>
    <option value="size">Sort by Yard Size</option>
    <option value="hirePeriod">Sort by Hire Period</option>
  </select>
</div>

{/* Card Container */}
<div className="max-w-6xl mx-auto border border-gray-300 rounded-lg p-6 bg-gray-800 mt-4">
     
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            size={skip.size}
            price={skip.price_before_vat}
            hiredays={skip.hire_period_days}
            imageSrc={ "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/"+skip.size+"-yarder-skip.jpg"}
            warnings={skip.warnings}
            selected={selectedSize === skip.size}
            onSelect={() => {
        
            if (selectedSize === skip.size) {
                setSelectedSize(null);
                setSelectedPrice(null);
                setSelectedHireDays(null)
              } else {
                setSelectedSize(skip.size);
                setSelectedPrice(skip.price_before_vat);
                setSelectedHireDays(skip.hire_period_days)
              }

            }}
            onImageClick={(img) => setModalImage(img)}
            
          />
        ))}
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Zoomed" className="max-h-[80vh] rounded-lg shadow-xl" />
        </div>
      )}
      <div className="hidden flex justify-center items-center mt-6 space-x-4">
         <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
    disabled={currentPage === 0}
    className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
  >
    ← Prev
  </button>

  <span className="text-white font-medium">
    Page {currentPage + 1} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
    disabled={currentPage === totalPages - 1}
    className="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50"
  >
    Next →
  </button>
  </div>
      </div>
    
      </div>
      {selectedSize && (


      
        <div class="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
          <div class="max-w-7xl mx-auto">
            <div class="mb-3 text-xs text-gray-400 text-center leading-snug">Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</div>
            <div class="lg:hidden">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-medium">{selectedSize} Yard Skip</h3>
                <div><span class="text-xl font-bold text-[#0037C1]">£{selectedPrice}</span>
                <span class="text-sm text-gray-400 ml-2">{selectedPrice} days</span>
                </div></div><div class="grid grid-cols-2 gap-3">
                  <button class="btn-secondary w-full">Back</button>
                  <button class="btn-primary w-full ">Continue</button>
                  </div></div><div class="hidden lg:flex items-center justify-between"><div class="flex items-center gap-6"><div><p class="text-sm text-gray-400">{selectedSize} Yard Skip</p></div><div><span class="text-2xl font-bold text-[#0037C1]">£{selectedPrice}</span><span class="text-sm text-gray-400 ml-2">{selectedHireDays} day hire</span></div></div><div class="flex items-center gap-4"><button class="btn-secondary">Back</button><button class="btn-primary flex items-center gap-2 ">Continue<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right w-4 h-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button></div></div></div>
</div>
       
      )}
    </div>
  )
};
  
};

export default App;
