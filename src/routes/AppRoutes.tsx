import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DocsLayout from '../layouts/DocsLayout';
import { PATHS } from './routePaths';

// Lazy loading pages
const Home = React.lazy(() => import('../pages/Home'));
const RoadmapList = React.lazy(() => import('../pages/RoadmapList'));
const StageDetails = React.lazy(() => import('../pages/StageDetails'));
const TopicDetails = React.lazy(() => import('../pages/TopicDetails'));
const Resources = React.lazy(() => import('../pages/Resources'));
const Projects = React.lazy(() => import('../pages/Projects'));
const Glossary = React.lazy(() => import('../pages/Glossary'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Main Marketing / Informational Pages */}
        <Route element={<MainLayout />}>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.ROADMAP} element={<RoadmapList />} />
          <Route path={PATHS.RESOURCES} element={<Resources />} />
          <Route path={PATHS.PROJECTS} element={<Projects />} />
          <Route path={PATHS.GLOSSARY} element={<Glossary />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Deep Dive Roadmap Pages with Sidebar */}
        <Route element={<DocsLayout />}>
          <Route path={PATHS.STAGE} element={<StageDetails />} />
          <Route path={PATHS.TOPIC} element={<TopicDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
