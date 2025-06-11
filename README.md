# Business Skip Hire App

This is a React + Tailwind CSS project that allows users to select a skip bin size with a responsive step navigation UI, lightbox preview, filtering, and sorting.

![screencapture-localhost-5173-2025-06-12-01_53_00](https://github.com/user-attachments/assets/dc9803c8-4176-4a6d-9404-f29e1c9e88ff)

![screencapture-localhost-5173-2025-06-12-02_04_32](https://github.com/user-attachments/assets/5888aae5-7d15-40cf-9e7a-8f7735ea78e1)



---

## 🚀 Features

- Responsive top step navigation with icons
- Dynamic skip cards with:
  - Selection & deselection logic
  - Warnings (e.g., Not Allowed on the Road)
  - Lightbox image preview
- Sorting options: hire period, price, yard type
- Paging arrows when skip cards exceed 9
- Floating bar showing selected skip
- Fully styled using Tailwind CSS

---

## 📁 Folder Structure
src/
├── components/

│ ├── SkipCard.jsx

│ ├── SkipsList.jsx

│ └── StepNavigation.jsx

├── App.jsx

├── main.jsx

tailwind.config.js
postcss.config.js
index.html

## 🔧 Setup Instructions

1. **Clone the repository**:
   1.1 git clone https://github.com/yourusername/Business-Skip-Hire.git
2 cd skip-selector
3. Install dependencies: npm install
4. Start the development server: npm run dev
5. Open in browser: http://localhost:5173

🌐 API Integration
To fetch skips dynamically:

Update the API endpoint inside App.jsx:
fetch("https://api.example.com/skips")

🛠 Built With
React
Vite
Tailwind CSS
Lucide React Icons
React Modal or Lightbox (optional)
