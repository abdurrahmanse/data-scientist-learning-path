import React from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import { Outlet } from 'react-router-dom';

const DocsLayout: React.FC = () => {
  return (
    <div className="docs-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div className="docs-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
