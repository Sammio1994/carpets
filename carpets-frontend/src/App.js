// import React from 'react';
// // import CarpetImages from './CarpetImages';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CarpetGallery from './CarpetGallery';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/gallery" element={<CarpetGallery />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarpetGallery from './CarpetGallery'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        {/* Define a route for the root path */}
        <Route path="/" element={<CarpetGallery />} />
      </Routes>
    </Router>
  );
}

export default App;