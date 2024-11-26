import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Buttons from './samples/Buttons';
import Cards from './samples/Cards';
import Lists from './samples/Lists';
import Tables from './samples/Tables';
import Alerts from './samples/Alerts';
import Spinners from './samples/Spinners';
import Modals from './samples/Modals';
import Charts from './samples/Charts';

const ComponentsLayout: React.FC = () => {
  return (
    <Routes>
      <Route path="buttons" element={<Buttons />} />
      <Route path="cards" element={<Cards />} />
      <Route path="lists" element={<Lists />} />
      <Route path="tables" element={<Tables />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="spinners" element={<Spinners />} />
      <Route path="modals" element={<Modals />} />
      <Route path="charts" element={<Charts />} />
      <Route path="" element={<Navigate to="buttons" replace />} />
    </Routes>
  );
};

export default ComponentsLayout;
