import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RepoCard from './components/RepoCard/RepoCard';
import HomePage from './components/HomePage/HomePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:login/:name' element={<RepoCard />} />
    </Routes>
  );
};

export default AppRoutes;
