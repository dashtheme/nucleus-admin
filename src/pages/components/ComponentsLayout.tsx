import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import '../../styles/theme.scss';
import BasicButtons from './buttons/BasicButtons';
import ButtonGroups from './buttons/ButtonGroups';
import DropdownButtons from './buttons/DropdownButtons';
import ToolbarButtons from './buttons/ToolbarButtons';
import Cards from './samples/Cards';
import Lists from './samples/Lists';
import Tables from '../../pages/tables/Tables';
import Alerts from './samples/Alerts';
import Spinners from './samples/Spinners';
import Modals from './samples/Modals';
import Charts from './samples/Charts';

const ComponentsLayout: React.FC = () => {
  return (
    <Routes>
      <Route path="buttons/basic" element={<BasicButtons />} />
      <Route path="buttons/group" element={<ButtonGroups />} />
      <Route path="buttons/dropdown" element={<DropdownButtons />} />
      <Route path="buttons/toolbar" element={<ToolbarButtons />} />
      <Route path="cards" element={<Cards />} />
      <Route path="lists" element={<Lists />} />
      <Route path="tables" element={<Tables />} />
      <Route path="alerts" element={<Alerts />} />
      <Route path="spinners" element={<Spinners />} />
      <Route path="modals" element={<Modals />} />
      <Route path="charts" element={<Charts />} />
      <Route path="" element={<Navigate to="buttons/basic" replace />} />
    </Routes>
  );
};

export default ComponentsLayout;
