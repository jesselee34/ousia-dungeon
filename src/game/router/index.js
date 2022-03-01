import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Menu from 'pages/menu';
import Battle from 'pages/battle';

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(Router, () => true);
